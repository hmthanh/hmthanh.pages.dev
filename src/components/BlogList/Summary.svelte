<script>
	import dayjs from "dayjs"
	import { goto } from "$app/navigation"

	export let postTitle
	export let datePublished = ""
	export let seoMetaDescription
	export let slug

	/**
	 * @param event {MouseEvent} - click
	 */
	const handleMouseEnter = (event) => {
		let element = /** @type {HTMLElement} */ (event.target)
		element.style.cursor = "pointer"
	}

	/**
	 * @param event {MouseEvent} - click
	 */
	const handleMouseLeave = (event) => {
		let element = /** @type {HTMLElement} */ (event.target)
		element.style.cursor = "default"
	}

	const handleMouseDown = async () => {
		goto(`/${slug}`)
	}

	const date = dayjs(datePublished)
	const dateString = `${date.format("D")} ${date.format("MMM")}`
	const idString = `blog-post-summary-${slug}`
</script>

<div role="presentation" class="nextra-cards not-prose container mt-4 grid" on:mouseenter={handleMouseEnter} on:mouseleave={handleMouseLeave} on:mousedown={handleMouseDown}>
	<div
		class="content nextra-card group flex flex-col justify-start overflow-hidden rounded-lg border border-gray-200 bg-transparent p-4 font-semibold text-current text-gray-700 no-underline shadow-sm shadow-gray-100 transition-all duration-200 hover:border-gray-300 hover:bg-slate-50 hover:text-gray-900 hover:shadow-md hover:shadow-gray-100 active:shadow-sm active:shadow-gray-200 dark:border-neutral-800 dark:text-neutral-200 dark:shadow-none dark:hover:border-neutral-700 dark:hover:bg-neutral-900 dark:hover:text-neutral-50 dark:hover:shadow-none"
		data-sveltekit-preload-data="hover"
	>
		<h3 class="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
			<a aria-label={`Open ${postTitle} blog post`} aria-describedby={idString} href={`/${slug}/`}>{postTitle}</a>
		</h3>
		<span class="text-sm">{dateString}</span>
		<p class="">{seoMetaDescription}</p>
		<a id={idString} aria-hidden="true" class="pt-4 text-base text-gray-600">Read more</a>
	</div>
</div>

<style lang="scss">
</style>
