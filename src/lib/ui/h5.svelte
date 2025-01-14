<script>
  import cn from "clsx"

  export let id
  let _class = ""
  export { _class as class }
</script>

<h5
  {id}
  class={_class === "sr-only"
    ? "sr-only"
    : cn("font-semibold tracking-tight text-slate-900 dark:text-slate-100", "mt-8 text-lg", _class)}
>
  <slot />
  {#if id}
    <a href={id} {id} class="subheading-anchor" aria-label="Permalink for this section"></a>
  {/if}
</h5>
