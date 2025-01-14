<script>
	import cn from 'clsx';
	let _class;
	export { _class as class };
</script>

<button
	class={cn(
		'nextra-button nx-transition-all active:nx-opacity-50',
		'nx-bg-primary-700/5 nx-border nx-border-black/5 nx-text-gray-600 hover:nx-text-gray-900 nx-rounded-md nx-p-1.5',
		'dark:nx-bg-primary-300/10 dark:nx-border-white/10 dark:nx-text-gray-400 dark:hover:nx-text-gray-50',
		_class
	)}
	{...$$restProps}
>
	<slot />
</button>
