import { mdsvex } from 'mdsvex'
import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import remarkToc from 'remark-toc'
import rehypeKatex from 'rehype-katex'
import rehypeSlug from 'rehype-slug'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import remarkReadingTime from 'remark-reading-time'
import remarkFrontmatter from 'remark-frontmatter'
import rehypeShiki from '@shikijs/rehype'
import { valueToEstree } from 'estree-util-value-to-estree'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter({
			precompress: true,
			fallback: './404.html',
			strict: true
		}),
		alias: {
			$lib: 'src/lib'
		}
	},

	preprocess: [vitePreprocess(), mdsvex()],
	extensions: ['.svelte', '.md', '.svelte.md', '.svx', '.mdx']
}

export default config
