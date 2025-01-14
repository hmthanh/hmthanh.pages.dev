<script>
  import Table from "./table/table.svelte"
  import cn from "clsx"

  let _class = ''
  export { _class as class }
</script>

<Table className={cn("nextra-scrollbar nx-mt-6 nx-p-0 first:nx-mt-0", _class)} {...$$restProps} />
