import type { Root } from "mdast"
import type { Plugin } from "unified"

const CODE_TABLE_QUOTE_LIST = new Set<string>(["code", "table", "blockquote", "list", "mdxJsxFlowElement"])

export type Flexsearch =
  | boolean
  | {
      /**
       * Whether to index code blocks
       * @default true
       */
      codeblocks: boolean
      /**
       * A filter function to filter out files from indexing, and return the
       * index file key, or null to skip indexing.
       * A site can have multiple indexes, by default they're separated by
       * locales as multiple index files.
       */
      indexKey?: (filepath: string, route: string, locale?: string) => null | string
    }

export type StructurizedData = Record<string, string>

export const remarkStructurize: Plugin<[Flexsearch], Root> = (options) => {
  const opts = { codeblocks: true, ...(options as any) }
  const structurizedData: StructurizedData = Object.create(null)
  let activeSlug = ""
  let skip = false
  let content = ""

  return (tree, file, done) => {
    walk(tree)
    save()
    file.data.structurizedData = structurizedData
    done()
  }

  function save() {
    const cleanedContent = content
      .trim()
      // Strip out large words starting from 50 chars since it can provoke out-of-memory while
      // indexing them, I took 50 chars since largest word in English has 45 characters
      // https://github.com/shuding/nextra/issues/2077#issuecomment-1693671011
      .replaceAll(/\w{50,}/g, "")
      // Replace by new line or new lines
      .replaceAll(/\n+/g, "\n")
    if (activeSlug || cleanedContent) {
      structurizedData[activeSlug] = cleanedContent
    }
  }

  function walk(node: any): string {
    let result = ""
    const { type } = node

    if (type === "heading") {
      skip = true
    }

    if (CODE_TABLE_QUOTE_LIST.has(type)) {
      result += "\n"
      if (!skip) content += "\n"
    }

    if ("children" in node) {
      for (const child of node.children) {
        result += walk(child)
      }
    } else if ((opts.codeblocks && type === "code") || ["text", "inlineCode", "tableCell"].includes(type)) {
      result += node.value
      if (!skip) content += node.value
    }

    if (CODE_TABLE_QUOTE_LIST.has(type) || ["listItem", "break"].includes(type)) {
      result += "\n"
      if (!skip) content += "\n"
    }

    if (type === "tableCell") {
      result += "\t"
      if (!skip) content += "\t"
    } else if (type === "heading") {
      skip = false
      if (node.depth > 1) {
        save()
        content = "" // reset content after h1 content
        activeSlug = node.data.hProperties.id + "#" + result
      }
    }
    return result
  }
}
