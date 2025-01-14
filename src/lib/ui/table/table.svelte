<script>
  import clsx from "clsx"

  let _class = ""
  export { _class as class }
</script>

<table class={clsx("block overflow-x-scroll", _class)} {...$$restProps}><slot /></table>
