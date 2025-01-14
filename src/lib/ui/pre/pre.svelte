<!-- <script lang="ts">
  import cn from "cn"
  import {CopyToClipboard} from "scope-ui"

  export let hasCopyCode = false
  export let filename
  let _class = ""
  export { _class as class }
</script>

<table class={cn("block overflow-x-scroll", _class)} {...$$restProps}><slot /></table>

<div className="nextra-code-block relative mt-6 first:mt-0">
    {filename && (
      <div className="absolute top-0 z-[1] w-full truncate rounded-t-xl bg-primary-700/5 py-2 px-4 text-xs text-gray-700 dark:bg-primary-300/10 dark:text-gray-200">
        {filename}
      </div>
    )}
    <pre
      className={cn(
        'bg-primary-700/5 mb-4 overflow-x-auto rounded-xl subpixel-antialiased dark:bg-primary-300/10 text-[.9em]',
        'contrast-more:border contrast-more:border-primary-900/20 contrast-more:contrast-150 contrast-more:dark:border-primary-100/40',
        filename ? 'pt-12 pb-4' : 'py-4',
        className
      )}
      ref={preRef}
      {...$$restProps}
    >
      <slot/>
    </pre>
    <div
      className={cn(
        'opacity-0 transition [div:hover>&]:opacity-100 focus-within:opacity-100',
        'flex gap-1 absolute m-[11px] right-0',
        filename ? 'top-8' : 'top-0'
      )}
    >
      <Button
        onClick={toggleWordWrap}
        className="md:hidden"
        title="Toggle word wrap"
      >
        <WordWrapIcon className="pointer-events-none h-4 w-4" />
      </Button>
      {#if hasCopyCode }
      <CopyToClipboard
        getValue={() =>
            preRef.current?.querySelector('code')?.textContent || ''
        }
        />
      {/if}
    </div>
  </div> -->

<script lang="ts">
  // import { createEventDispatcher } from "svelte"
  // import { CopyIcon, WordWrapIcon } from "scope-docs"
  import cn from "clsx"
  // import Button from "../button/button.svelte"

  // export let hasCopyCode = false
  // export let filename: string = ""
  let _class = ""
  export { _class as class }

  // const dispatch = createEventDispatcher()

  // const toggleWordWrap = () => {
  //   // Define your toggleWordWrap logic here
  //   const htmlDataset = document.documentElement.dataset
  //   const hasWordWrap = "nextraWordWrap" in htmlDataset
  //   if (hasWordWrap) {
  //     delete htmlDataset.nextraWordWrap
  //   } else {
  //     htmlDataset.nextraWordWrap = ""
  //   }
  // }
</script>

<!-- <div class={cn("nextra-code-block relative mt-6", _class, filename ? "mt-0" : "")}>
  {#if filename}
    <div
      class="absolute top-0 z-10 w-full truncate rounded-t-xl bg-primary-700/5 py-2 px-4 text-xs text-gray-700 dark:bg-primary-300/10 dark:text-gray-200"
    >
      {filename}
    </div>
  {/if}
  <pre
    class={cn(
      "bg-primary-700/5 mb-4 overflow-x-auto rounded-xl subpixel-antialiased dark:bg-primary-300/10 text-[.9em]",
      "contrast-more:border contrast-more:border-primary-900/20 contrast-more:contrast-150 contrast-more:dark:border-primary-100/40",
      filename ? "pt-12 pb-4" : "py-4"
    )}
    {...$$restProps}>
        <slot />
      </pre>
  <div
    class={cn(
      "opacity-0 transition hover:opacity-100 focus-within:opacity-100",
      "flex gap-1 absolute m-[11px] right-0",
      filename ? "top-8" : "top-0"
    )}
  >
    <Button on:click={toggleWordWrap} class="md:hidden" title="Toggle word wrap">
      <WordWrapIcon class="pointer-events-none h-4 w-4" />
    </Button>
    {#if hasCopyCode}
      <CopyIcon getValue={() => ""} />
    {/if}
  </div>
</div> -->
<!-- <CopyIcon getValue={() => preRef.current?.querySelector("code")?.textContent || ""} /> -->

<pre
  class={cn(
    "bg-primary-700/5 mb-4 overflow-x-auto rounded-xl subpixel-antialiased dark:bg-primary-300/10 text-[.9em] contrast-more:border contrast-more:border-primary-900/20 contrast-more:contrast-150 contrast-more:dark:border-primary-100/40 pt-12 pb-4",
    _class
  )}
  data-language="json"
  data-theme="default"
  {...$$restProps}>
  <slot />
  </pre>
