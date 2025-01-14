<!-- import type { ComponentProps } from 'react'

export const Td = ({ className = '', ...props }: ComponentProps<'td'>) => (
  <td
    className={cn(
      'm-0 border border-gray-300 px-4 py-2 dark:border-gray-600',
      className
    )}
    {...props}
  />
) -->

<script>
  import clsx from "clsx"
  let _class = ""
  export { _class as class }
</script>

<td class={clsx("m-0 border border-gray-300 px-4 py-2 dark:border-gray-600", _class)} {...$$restProps}><slot /></td>
