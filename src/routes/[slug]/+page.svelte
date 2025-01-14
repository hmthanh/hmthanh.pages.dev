<script>
	import { error } from "@sveltejs/kit"
	/** @type {impsort('./$types').PageData} */
	let { data } = $props()
	const { metadata, slug, Page } = data
	// console.log("post22	", metadata)
</script>

<Page />
