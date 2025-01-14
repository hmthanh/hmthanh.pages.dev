<script>
  import cn from "clsx"

  let _class = ''
  export { _class as class }
</script>

<li class={cn("my-2", _class)} {...$$restProps}>
  <slot />
</li>
