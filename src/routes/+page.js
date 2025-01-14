export const load = async () => {
	const mdModules = import.meta.glob("../content/blog/**/index.md")
	console.log(mdModules)

	const posts = await Promise.all(
		Object.keys(mdModules).map(async (path) => {
			const fileMeta = await mdModules[path]()
			const slug = path.split("/").at(-2)
			const meta = fileMeta

			if (fileMeta && typeof fileMeta === "object" && slug) {
				if ("metadata" in fileMeta) {
					const metadata = fileMeta.metadata
					return { ...metadata, slug }
				}
			}
		})
	)

	return { posts }
}
