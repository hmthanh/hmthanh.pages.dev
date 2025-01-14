<script>
  import Anchor from "$lib/scope-docs/components"
  import cn from "clsx"

  let _class = ""
  export { _class as class }

  export let href = ""

  const EXTERNAL_HREF_REGEX = /https?:\/\//
</script>

<Anchor
  {href}
  newWindow={EXTERNAL_HREF_REGEX.test(href)}
  class={cn("text-primary-600 underline decoration-from-font [text-underline-position:from-font]", _class)}
  {...$$restProps}
>
  <slot />
</Anchor>
