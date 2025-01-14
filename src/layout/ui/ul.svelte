<script>
  import cn from "clsx"

  let _class = ''
  export { _class as class }
</script>

<ul class={cn("mt-6 list-disc first:mt-0 ltr:ml-6 rtl:mr-6", _class)} {...$$restProps}>
  <slot />
</ul>
