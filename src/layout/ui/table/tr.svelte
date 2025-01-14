<script>
  import clsx from "clsx"
  let _class = ""
  export { _class as class }
</script>

<tr
  class={clsx(
    "m-0 border-t border-gray-300 p-0 dark:border-gray-600",
    "even:bg-gray-100 even:dark:bg-gray-600/20",
    _class
  )}
  {...$$restProps}
>
  <slot />
</tr>
