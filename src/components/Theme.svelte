<script>
	import { Themes, theme } from '$lib/store/theme_store';
	import MdiWeatherSunset from '~icons/mdi/weather-sunset';
	import MdiWeatherNight from '~icons/mdi/weather-night';
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
			<MdiWeatherNight />
		{/if}
		{#if $theme === Themes.Dark}
			<MdiWeatherSunset />
		{/if}
	</span>
</div>

<style>
	span {
		cursor: pointer;
	}
	.icon {
		color: var(--contrast-color);
		font-size: 20px;
	}
</style>
