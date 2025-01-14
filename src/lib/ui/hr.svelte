<script>
  import cn from "clsx"

  let _class = ''
  export { _class as class }
</script>

<hr
  class={cn(
    "my-8 border-neutral-200/70 contrast-more:border-neutral-400 dark:border-primary-100/10 contrast-more:dark:border-neutral-400",
    _class
  )}
  {...$$restProps}
/>
