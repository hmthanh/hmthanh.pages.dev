<script>
	import { browser } from "$app/environment"
	import lazyload from "vanilla-lazyload"
	// import BlogPost from "$lib/components/BlogPost.svelte"
	// import { ArrowRightIcon } from "scope-core/icons"

	// Props should be explicitly declared
	const { slug, page, post } = $props()
	// export let slug
	// export let page
	// export let post
	// export let imageData

	// /** @type {impsort('./$types').PageData} */
	// const { page, post, imageData } =  $props();
	// // console.log(page)

	// console.log("slug", slug)

	// if (browser && !document.lazyloadInstance) {
	// 	document.lazyloadInstance = new lazyload()
	// }
</script>

<!-- <BlogPost {post} /> -->

<svelte:component this={page} />
