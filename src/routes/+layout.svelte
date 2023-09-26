<script>
	import Header from '../components/Header.svelte';
	import Login from '../components/LoginLogout/Login.svelte';
	import '../styles/fonts.css';
	import { session } from '$lib/store/store.ts';
</script>

<svelte:head>
	<title>Casita</title>
</svelte:head>

<div>
	<Header />
	{#if $session.user_name}
		<slot />
	{:else}
		<Login />
	{/if}
</div>

<style>
	:global(:root) {
		--primary-color: #94a684;
		--secondary-color: #aec3ae;
		--contrast-color: rgb(37, 37, 37);
		--bg-color: #ffffff;
		--font-color: white;

		@media (prefers-color-scheme: dark) {
			--primary-color: #678a6d; /* A darker shade of green */
			--secondary-color: #94a684; /* Use the light theme's primary color */
			--contrast-color: #ffffff; /* White for high contrast */
			--bg-color: #333333; /* Dark background color */
			--font-color: #ffffff;
		}
	}

	:global(*) {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
		font-family: 'RobotoCondensed';
	}
	:global(body) {
		background-color: var(--bg-color);
	}

	div {
		max-width: 1000px;
		margin: 0 auto;
	}
	:global(.container) {
		padding: 0 50px;
		@media (max-width: 748px) {
			padding: 0 20px;
		}
	}
	:global(.card) {
		background-color: var(--secondary-color);
		border-radius: 10px;
		padding: 20px;
	}
</style>
