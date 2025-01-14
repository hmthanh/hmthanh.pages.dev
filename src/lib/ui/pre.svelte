<script>
  import cn from "clsx"
  import Pre from "./pre/pre.svelte"

  let _class = ""
  export { _class as class }
</script>

<div class={cn("not-prose", _class)}>
  <Pre {...$$restProps}><slot /></Pre>
</div>
