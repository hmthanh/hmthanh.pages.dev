<script>
  import cn from "clsx"
  let _class = ""
  export { _class as class }
</script>

<h1
  class={_class === "sr-only"
    ? "sr-only"
    : cn(
        "font-semibold tracking-tight text-slate-900 dark:text-slate-100",
        "mt-2 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100",
        _class
      )}
  {...$$restProps}
>
  <slot />
</h1>
