// helpers
import { writable } from "svelte/store"

// types
export const theme = writable("light")

export let pageMap

export let flexSearch

export let pageOpts = {
  filePath: "",
  route: "",
  frontMatter: {},
  pageMap: [],
  title: "",
  headings: [], 
}

export let meta = ""

export const NEXTRA_INTERNAL = {}

// theme config
export let themeConfig

// page layout props
export const pageProps = writable({})

// globals
export let global = {}

// theme layout component
export let Layout = {}

// page content component
export let Content = {}

// context stores
export const context = writable({})

// search data
export let searchData = {}

// dynamic meta
export let dynamicMeta = {}

// configs
export let mdxOptions = {}
export let nextraConfig = {}

// nextra integration
export function nextra() {
  return {}
}

export default nextra
