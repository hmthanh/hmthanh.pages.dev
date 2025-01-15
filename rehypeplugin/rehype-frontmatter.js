import { parse as parseYaml } from "yaml"
import { visit } from "unist-util-visit"

/**
 * Rehype plugin for mdsvex to handle frontmatter
 * Use in mdsvex.config.js
 */
export function rehypeFrontmatter() {
	return function transformer(tree, file) {
		let yamlContent = null
		let hasMetadataExport = false

		// Look for YAML nodes
		visit(tree, "yaml", (node) => {
			yamlContent = node.value
		})

		// Check for existing metadata exports
		visit(tree, "mdxjsEsm", (node) => {
			if (node.value && node.value.includes("export const metadata =")) {
				hasMetadataExport = true
			}
		})

		if (yamlContent && hasMetadataExport) {
			throw new Error("Both YAML front matter and `metadata` export aren't supported. Keep only 1.")
		}

		// Parse YAML and create metadata export
		if (yamlContent) {
			try {
				const metadata = parseYaml(yamlContent)
				const exportScript = `<script context="module">
export const metadata = ${JSON.stringify(metadata, null, 2)};
</script>`

				// Add the script to the beginning of the document
				tree.children.unshift({
					type: "raw",
					value: exportScript
				})
			} catch (error) {
				throw new Error(`Failed to parse frontmatter: ${error.message}`)
			}
		} else if (!hasMetadataExport) {
			// Add empty metadata if none exists
			tree.children.unshift({
				type: "raw",
				value: `<script context="module">
export const metadata = {};
</script>`
			})
		}

		return tree
	}
}
