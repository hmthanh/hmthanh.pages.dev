<script>
  import clsx from "clsx"
  let _class = ""
  export { _class as class }
</script>

<th class={clsx("m-0 border border-gray-300 px-4 py-2 font-semibold dark:border-gray-600", _class)} {...$$restProps}>
  <slot />
</th>
