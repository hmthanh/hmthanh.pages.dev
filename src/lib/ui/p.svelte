<script lang="ts">
  import cn from "clsx"
  let _class = ''
  export { _class as class }
</script>

<p class={cn("mt-6 leading-7 first:mt-0", _class)}><slot /></p>
