<script lang="ts">
  import { Collapse } from "scope-docs/components"
  import { createEventDispatcher, onMount } from "svelte"
  import { writable } from "svelte/store"

  export let open

  const dispatch = createEventDispatcher()
  const openState = writable(!!open)

  // const summary = findSummary(children)

  // To animate the close animation we have to delay the DOM node state here.
  let delayedOpenState = openState
  onMount(() => {
    if (openState) {
      delayedOpenState.set(true)
    } else {
      const timeout = setTimeout(() => (delayedOpenState = openState), 500)
      return () => clearTimeout(timeout)
    }
  })

  // Emit event when the open state changes
  openState.subscribe((value) => {
    dispatch("change", { open: value })
  })
</script>

<details
  class="my-4 rounded border border-gray-200 bg-white p-2 shadow-sm first:mt-0 dark:border-neutral-800 dark:bg-neutral-900"
  {...$$restProps}
  open={$delayedOpenState}
  data-expanded={openState ? "true" : "false"}
>
  <!-- <DetailsProvider value={setOpen}>{summary}</DetailsProvider> -->
  <!-- <div>{summary}</div> -->
  <Collapse isOpen={openState}><slot /></Collapse>
</details>
