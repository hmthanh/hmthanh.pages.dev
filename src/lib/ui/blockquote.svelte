<script>
  import cn from "clsx"

  let _class = ''
  export { _class as class }
</script>

<blockquote
  class={cn(
    "mt-6 border-gray-300 italic text-gray-700 dark:border-gray-700 dark:text-gray-400",
    "first:mt-0 ltr:border-l-2 ltr:pl-6 rtl:border-r-2 rtl:pr-6",
    _class
  )}
  {...$$restProps}
>
  <slot />
</blockquote>
