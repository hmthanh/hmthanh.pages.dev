export const prerender = true

/** @type {import('./$types').PageLoad} */
export async function load({ params, url }) {
	const { slug } = params
	const { pathname } = url

	try {
		// Import all blog posts at build time to support prerendering
		const posts = import.meta.glob("../../content/blog/*/index.md")
		const postPath = `../../content/blog/${slug}/index.md`
		// console.log("posts", posts)

		// Check if the post exists
		if (!posts[postPath]) {
			return {
				status: 404,
				error: new Error(`Post ${slug} not found`)
			}
		}

		// Load the post content
		const postResult = await posts[postPath]()
		// console.log("postResult", postResult)
		const { default: page, metadata } = postResult
		
		if (!page || !metadata) {
			return {
				status: 404,
				error: new Error("Post content or metadata missing")
			}
		}
		
		// Destructure metadata with default values to prevent undefined errors
		const { datePublished = "", featuredImage = "", featuredImageAlt = "", ogImage = "", ogSquareImage = "", postTitle = "", seoMetaDescription = "", twitterImage = "" } = metadata
		console.log("postTitle", postTitle)

		// Optional: Calculate reading time
		// Uncomment and modify if you want to add reading time calculation
		// const timeToRead = readingTime(page, 10);

		return {
			post: {
				datePublished,
				featuredImage,
				featuredImageAlt,
				ogImage,
				ogSquareImage,
				postTitle,
				seoMetaDescription,
				timeToRead: "", // Add reading time calculation here if needed
				twitterImage,
				slug
			},
			slug,
			page
		}
	} catch (error) {
		console.error(`Error loading post ${slug}:`, error)
		return {
			status: 404,
			error: new Error(`Failed to load post ${slug}`)
		}
	}
}

// If you want to validate post data at build time
export const entries = async () => {
	const posts = import.meta.glob("../../content/blog/*/index.md")
	const slugs = Object.keys(posts).map((path) => {
		// Extract slug from path (e.g., "../../content/blog/my-post/index.md" -> "my-post")
		return path.split("/").slice(-2)[0]
	})

	return slugs.map((slug) => ({ slug }))
}
