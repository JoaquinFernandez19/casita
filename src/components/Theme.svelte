<script>
	import { theme } from '$lib/store/store.ts';
	import FaRegMoon from 'svelte-icons/fa/FaRegMoon.svelte';
	import FaRegSun from 'svelte-icons/fa/FaRegSun.svelte';

	const handleThemeChange = () => {
		theme.set($theme === 'light' ? 'dark' : 'light');
	};
</script>

<div>
	<span
		on:click={handleThemeChange}
		role="button"
		on:keypress={handleThemeChange}
		tabindex="0"
		class="icon"
	>
		{#if $theme === 'light'}
			<FaRegMoon />
		{:else}
			<FaRegSun />
		{/if}
	</span>
</div>

<style>
	span {
		color: var(--bg-color);
		cursor: pointer;
	}
</style>
