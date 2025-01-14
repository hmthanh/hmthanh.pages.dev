<script>
  import cn from "clsx"

  export let id
  let _class = ""
  export { _class as class }
</script>

<h2
  {id}
  class={_class === "sr-only"
    ? "sr-only"
    : cn(
        "border-neutral-hsla",
        "font-semibold tracking-tight text-slate-900 dark:text-slate-100",
        "mt-10 border-b pb-1 text-3xl border-neutral-200/70 contrast-more:border-neutral-400 dark:border-primary-100/10 contrast-more:dark:border-neutral-400",
        _class
      )}
>
  <slot />
  {#if id}
    <a href={id} {id} class="subheading-anchor" aria-label="Permalink for this section"></a>
  {/if}
</h2>
