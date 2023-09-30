<script>
	import { Themes, theme } from '$lib/store/theme_store';
	import FaRegMoon from 'svelte-icons/fa/FaRegMoon.svelte';
	import FaRegSun from 'svelte-icons/fa/FaRegSun.svelte';

	const handleThemeChange = () => {
		theme.toggle();
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
		{#if $theme === Themes.light}
			<FaRegMoon />
		{/if}
		{#if $theme === Themes.Dark}
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
