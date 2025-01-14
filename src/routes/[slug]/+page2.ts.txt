// import readingTime from "reading-time";
/** @type {import('./$types').PageLoad} */
export async function load({ params, url }) {
  const { slug } = params
  const { pathname } = url
  // console.log("slug", slug)
  // console.log("pathname", pathname)

  // ../../content/blog/${slug}/index.md
  const postPromise = import(`../../content/blog/${slug}/index.md`)
  // const postPromise = import(`../../content/blog/${slug}/index.md`)
  // const imageDataPromise = import(`../../lib/generated/posts/${pathname.slice(1)}.js`)
  await postPromise
    .then((result) => {
      // console.log(result)
    })
    .catch((err) => {})
  // await postPromise.then((data) => {
  //   console.log("postPromise", JSON.stringify(data.default));
  //   console.log("postPromise", data.metadata);
  // })

  const [postResult] = await Promise.all([postPromise])
  // console.log("postResult ", postResult)
  const { default: page, metadata } = postResult
  // const { default: imageData } = imageDataResult
  // console.log("go")

  if (!page) {
    return {
      status: 404,
    }
  }

  // console.log("metadata", metadata);
  const {
    datePublished,
    featuredImage,
    featuredImageAlt,
    ogImage,
    ogSquareImage,
    postTitle,
    seoMetaDescription,
    twitterImage,
  } = metadata

  return {
    post: {
      datePublished,
      featuredImage,
      featuredImageAlt,
      ogImage,
      ogSquareImage,
      postTitle,
      seoMetaDescription,
      timeToRead: "", //readingTime(page, 10), //Math.ceil(readingTime(page).minutes),
      twitterImage,
      slug,
    },
    slug,
    page,
  }
}
