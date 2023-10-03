<script>
	import Header from '../components/Header.svelte';
	import Login from '../components/LoginLogout/Login.svelte';
	import '../styles/fonts.css';
	import { session } from '$lib/store/session_store';
	import { theme } from '$lib/store/theme_store';
</script>

<svelte:head>
	<title>Casitapp</title>
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
	:global(.icon) {
		width: 20px;
		height: 20px;
		display: block;
	}
	.app {
		max-width: 1000px;
		margin: 0 auto;
		height: 100vh;
		position: relative;
	}
	.base {
		--bg-color: rgb(99, 99, 99);
	}

	.dark {
		--primary-color: #678a6d;
		--secondary-color: #94a684;
		--contrast-color: #ffffff;
		--bg-color: #333333;
		--font-color: #ffffff;
	}
	.light {
		--primary-color: #94a684;
		--secondary-color: #aec3ae;
		--contrast-color: rgb(37, 37, 37);
		--bg-color: #fff5c680;
		--font-color: white;
	}

	.base {
		background-color: var(--bg-color);
		transition: background-color 0.2s ease-in;
	}
</style>
