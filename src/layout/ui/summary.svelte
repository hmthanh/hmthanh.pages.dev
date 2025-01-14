<script>
  import cn from "clsx"

  let _class = ""
  export { _class as class }
</script>

<summary
  class={cn(
    "flex items-center cursor-pointer list-none p-1 transition-colors hover:bg-gray-100 dark:hover:bg-neutral-800",
    "before:mr-1 before:inline-block before:transition-transform before:content-[''] dark:before:invert before:shrink-0",
    "rtl:before:rotate-180 [[data-expanded]>&]:before:rotate-90",
    _class
  )}
  {...$$restProps}
  on:click|preventDefault={(v) => !v}
>
  <slot />
</summary>
