<script>
	import Header from '../components/Header.svelte';
	import Login from '../components/LoginLogout/Login.svelte';
	import '../styles/fonts.css';
	import { session } from '$lib/store/session_store';
	import { theme } from '$lib/store/theme_store';
</script>

<svelte:head>
	<title>Casita Lemon</title>
</svelte:head>

<div class={`${$theme} base`}>
	<div class="app">
		<Header />
		{#if $session.user_name}
			<slot />
		{:else}
			<Login />
		{/if}
	</div>
</div>

<style>
	:global(*) {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
		font-family: 'RobotoCondensed';
		color: var(--font-color);
	}

	:global(body, html) {
		height: 100%;
	}
	:global(.container) {
		padding: 0 50px;
		position: relative;
		@media (max-width: 748px) {
			padding: 0 20px;
		}
	}
	:global(.card) {
		background-color: var(--secondary-color);
		border-radius: 10px;
		padding: 20px;
	}
	:global(button) {
		background: none;
		border: none;
		cursor: pointer;
	}

	:global(.icon_lg, .icon_md) {
		color: var(--font-color);
	}

	:global(.icon_md) {
		font-size: 30px;
		line-height: 10px;
		@media (max-width: 1000px) {
			font-size: 25px;
			line-height: 10px;
		}
	}
	:global(.icon_lg) {
		font-size: 60px;
		line-height: 20px;
		@media (max-width: 1000px) {
			font-size: 30px;
			line-height: 10px;
		}
	}
	:global(input) {
		outline: none;
		padding: 5px 10px;
		color: #171717;
		font-size: 20px;
	}

	.app {
		max-width: 1000px;
		margin: 0 auto;
		height: 100%;
		position: relative;
	}
	.base {
		--bg-color: rgb(99, 99, 99);
		height: 100%;
		width: 100%;
		position: relative;
	}

	.dark {
		--primary-color: #678a6d;
		--secondary-color: #94a684;
		--contrast-color: #ffffff;
		--bg-color: #333333;
		--bg-color-stronger: #171717;
		--font-color: #ffffff;
	}
	.light {
		--primary-color: #94a684;
		--secondary-color: #aec3ae;
		--contrast-color: rgb(37, 37, 37);
		--bg-color: #fff5c680;
		--bg-color-stronger: rgb(247 245 228);
		--font-color: #333333;
	}

	.base {
		background-color: var(--bg-color);
		transition: background-color 0.2s ease-in;
	}
</style>
