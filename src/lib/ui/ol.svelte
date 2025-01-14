<script>
  import cn from "clsx"

  let _class = ''
  export { _class as class }
</script>

<ol class={cn("mt-6 list-decimal first:mt-0 ltr:ml-6 rtl:mr-6", _class)} {...$$restProps}>
  <slot />
</ol>
