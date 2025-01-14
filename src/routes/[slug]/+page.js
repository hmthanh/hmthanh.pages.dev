import { error } from "@sveltejs/kit"

export const prerender = true

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const { slug } = params
	// console.log("sdfdf", slug)
	const data = { title: `Page for ${slug}`, description: `Description for ${slug}` }

	try {
		// Import all blog posts at build time to support prerendering
		const posts = await import(`../../content/blog/${slug}/index.md`)
		const { default: Page, metadata } = posts
		// console.log("metadata", metadata)
		// const posts = import.meta.glob('../../content/blog/*/index.md');
		// const postPath = `../../content/blog/${slug}/index.md`;

		// Check if the post exists
		// if (!posts[postPath]) {
		//   return {
		//     status: 404,
		//     error: new Error(`Post ${slug} not found`)
		//   };
		// }

		// Load the post content
		// const postResult = await posts[postPath]();
		// 	const defaultPost = posts.default
		// const { default: Page, metadata } = postResult;

		if (!Page || !metadata) {
			return {
				status: 404,
				error: new Error("Post content or metadata missing")
			}
		}

		// 	// Destructure metadata with default values to prevent undefined errors
		const { datePublished = "", featuredImage = "", featuredImageAlt = "", ogImage = "", ogSquareImage = "", postTitle = "", seoMetaDescription = "", twitterImage = "" } = metadata

		// 	// Optional: Calculate reading time
		// 	// Uncomment and modify if you want to add reading time calculation
		// 	// const timeToRead = readingTime(page, 10);

		return {
			metadata: {
				datePublished,
				featuredImage,
				featuredImageAlt,
				ogImage,
				ogSquareImage,
				postTitle,
				seoMetaDescription,
				timeToRead: "",
				twitterImage,
				slug
			},
			slug,
			Page
		}
	} catch (error) {
		console.error(`Error loading post ${slug}:`, error)
		return {
			status: 404,
			error: new Error(`Failed to load post ${slug}`)
		}
	}
	// return {
	// 	post: {
	// 		title: `Title for ${params.slug} goes here`,
	// 		content: `Content for ${params.slug} goes here`
	// 	}
	// }
}

// If you want to validate post data at build time
// export const entries = async () => {
// 	const posts = import.meta.glob("../../content/blog/*/index.md")
// 	const slugs = Object.keys(posts).map((path) => {
// 		// Extract slug from path (e.g., "../../content/blog/my-post/index.md" -> "my-post")
// 		return path.split("/").slice(-2)[0]
// 	})

// 	return slugs.map((slug) => ({ slug }))
// }
