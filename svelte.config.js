import { mdsvex } from "mdsvex"
// import adapter from '@sveltejs/adapter-static'
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
// import { remarkCustomHeadingId } from "./remarkplugins/remark-custom-heading-id.js"

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: [".svelte.md", ".md", ".svx", ".mdx"],
	// highlight: {
	// 	highlighter: async (code, lang = "text") => {
	// 		const langs = ["javascript", "typescript", "js", "bash", "text", "json", "sh"]

	// 		// const highlighter = await getHighlighter({ themes: "poimandres" })
	// 		const highlighter = await getHighlighter({
	// 			themes: ["poimandres"],
	// 			langs: ["javascript", "typescript", "js", "bash", "text", "json", "sh", "md"]
	// 		})
	// 		await highlighter.loadLanguage("javascript", "typescript", "js", "bash", "text", "json", "sh", "md")

	// 		const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: "poimandres" }))
	// 		// return `{@html \`${html}\`}` // html
	// 		return `{@html \`${html}\` }`
	// 	}
	// },
	remarkPlugins: [remarkFrontmatter, remarkReadingTime, remarkGfm, remarkMath, [remarkToc, { tight: true }]],
	rehypePlugins: [remarkMath, [rehypeKatex, {}], [rehypeShiki, { theme: "github-dark" }], rehypeSlug, [rehypePrettyCode]],
	layout: {
		article: "./src/layout/article.svelte"
	}
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
