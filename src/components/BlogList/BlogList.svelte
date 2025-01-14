<script>
	import Summary from "$components/BlogList/Summary.svelte"

	export let initialPosts = 4
	export let posts

	const postCount = posts.length
	$: showPosts = initialPosts
	$: displayPosts = posts.slice(0, showPosts)

	const handleClick = () => {
		showPosts += initialPosts
	}
</script>

<section role="feed">
	{#each displayPosts as post, index}
		<article aria-posinset={index + 1} aria-setsize={postCount}>
			<Summary datePublished={post.datePublished} postTitle={post.postTitle} seoMetaDescription={post.seoMetaDescription} slug={post.slug} />
		</article>
	{:else}
		<p>No posts yet!</p>
	{/each}
	{#if showPosts < postCount}
		<button type="submit" on:click={handleClick}>See more</button>
	{/if}
</section>
