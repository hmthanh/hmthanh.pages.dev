import path from 'node:path'

export const MARKDOWN_EXTENSION_REGEX = /\.mdx?$/

export const EXTERNAL_URL_REGEX = /^https?:\/\//

export const CWD = process.cwd()

export const PUBLIC_DIR = path.join(CWD, "public")
