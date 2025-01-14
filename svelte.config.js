// import { join } from "path";
import { escapeSvelte, mdsvex } from "mdsvex"
// import adapter from "@sveltejs/adapter-static"
import adapter from "@sveltejs/adapter-cloudflare"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"
import remarkToc from "remark-toc"
import rehypeKatex from "rehype-katex"
import rehypeSlug from "rehype-slug"
import rehypePrettyCode from "rehype-pretty-code"
import remarkGfm from "remark-gfm"
import remarkMath from "remark-math"
import remarkReadingTime from "remark-reading-time"
import remarkFrontmatter from "remark-frontmatter"
import rehypeShiki from "@shikijs/rehype"
import { valueToEstree } from "estree-util-value-to-estree"
import { getHighlighter, createHighlighter } from "shiki"
import yaml from "yaml"

// import { remarkCustomHeadingId } from "./remarkplugins/remark-custom-heading-id.js"

// const path_to_layout = join(__dirname, "./src/layout/article.svelte");

import { theme } from "./theme.js"

export const CODE_BLOCK_FILENAME_REGEX = /filename="([^"]+)"/
export function createAstExportConst(name, value) {
	return {
		type: "ExportNamedDeclaration",
		specifiers: [],
		declaration: {
			type: "VariableDeclaration",
			kind: "const",
			declarations: [
				{
					type: "VariableDeclarator",
					id: { type: "Identifier", name },
					init: value
				}
			]
		}
	}
}

function createNode(data) {
	return {
		type: "mdxjsEsm",
		data: {
			estree: {
				body: [createAstExportConst("frontMatter", valueToEstree(data))]
			}
		}
	}
}

export function isExportNode(node, varName) {
	if (node.type !== "mdxjsEsm") return false
	const [n] = node.data.estree.body

	if (n.type !== "ExportNamedDeclaration") return false

	const name = n.declaration?.declarations?.[0].id.name
	if (!name) return false

	return name === varName
}

function traverseArray(nodes, result = []) {
	for (const node of nodes) {
		if (!node) continue

		if (node.type === "Literal") {
			result.push(node.value)
			continue
		}
		if (node.type === "ObjectExpression") {
			result.push(estreeToValue(node.properties))
			continue
		}
		if (node.type === "ArrayExpression") {
			result.push(traverseArray(node.elements))
		}
	}
	return result
}

function estreeToValue(nodes, result = Object.create(null)) {
	for (const node of nodes) {
		if (node.type !== "Property") continue
		const { key, value } = node

		const keyName = key.type === "Literal" ? key.value : key.type === "Identifier" ? key.name : ""
		if (value.type === "Literal") {
			result[keyName] = value.value
		} else if (value.type === "ObjectExpression") {
			result[keyName] = estreeToValue(value.properties)
		} else if (value.type === "ArrayExpression") {
			result[keyName] = traverseArray(value.elements)
		}
	}
	return result
}

export const remarkMdxFrontMatter = () => (ast, file) => {
	const yamlNodeIndex = ast.children.findIndex((node) => node.type === "yaml")
	const esmNodeIndex = ast.children.findIndex((node) => isExportNode(node, "frontMatter"))
	const hasYaml = yamlNodeIndex !== -1
	const hasEsm = esmNodeIndex !== -1

	if (hasYaml) {
		if (hasEsm) {
			throw new Error("Both yaml frontMatter and esm export frontMatter aren't supported. Keep only 1.")
		}

		const raw = ast.children[yamlNodeIndex].value
		const data = yaml.parseYaml(raw)

		ast.children[yamlNodeIndex] = createNode(data)
	} else if (!hasEsm) {
		// Attach dummy node
		ast.children.unshift(createNode({}))
	}

	const frontMatter = ast.children.find((node) => isExportNode(node, "frontMatter")).data.estree.body[0].declaration.declarations[0].init.properties

	file.data.frontMatter = estreeToValue(frontMatter)
}

const DEFAULT_REHYPE_PRETTY_CODE_OPTIONS = {
	theme,
	onVisitLine(node) {
		// Prevent lines from collapsing in `display: grid` mode, and
		// allow empty lines to be copy/pasted
		if (node.children.length === 0) {
			node.children = [{ type: "text", value: " " }]
		}
	},
	onVisitHighlightedLine(node) {
		node.properties.className.push("highlighted")
	},
	onVisitHighlightedWord(node) {
		node.properties.className = ["highlighted"]
	},
	filterMetaString: (meta) => meta.replace(CODE_BLOCK_FILENAME_REGEX, "")
}

const highlighter = await createHighlighter({
	themes: ["poimandres"],
	langs: ["javascript", "typescript", "js", "bash", "text", "json", "sh"]
})

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: [".svelte.md", ".md", ".svx", ".mdx"],
	highlight: {
		highlighter: async (code, lang = "text") => {
			// const langs = ["javascript", "typescript", "js", "bash", "text", "json", "sh"]
			const highlighter = await createHighlighter({
				themes: ["github-dark-default"],
				langs: ["javascript", "typescript", "js", "bash", "text", "json", "sh"]
			})

			await highlighter.loadLanguage("javascript", "typescript", "js", "bash", "text", "json", "sh", "md")

			const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: "github-dark-default" }))
			return `{@html \`${html}\` }`
		}
	},
	remarkPlugins: [remarkFrontmatter, remarkReadingTime, remarkGfm, remarkMath, [remarkToc, { tight: true }]],
	rehypePlugins: [remarkMath, [rehypeKatex, {}], [rehypeShiki, { theme: "github-dark" }], rehypeSlug, [rehypePrettyCode, { ...DEFAULT_REHYPE_PRETTY_CODE_OPTIONS }]],
	layout: "./src/layout/article.svelte"
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter({
			precompress: true,
			// fallback: "./404.html",
			strict: true
		}),
		alias: {
			$lib: "src/lib",
			$components: "./src/components",
			$ui: "./src/layout/ui",
			$styles: "./src/styles",
			$utils: "src/lib/utils",
			$stores: "src/lib/stores",
			$hooks: "src/lib/hooks"
		}
	},

	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	extensions: [".svelte", ".md", ".svelte.md", ".svx", ".mdx"]
}

export default config
