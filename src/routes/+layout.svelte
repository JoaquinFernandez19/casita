<script>
	import Header from '../components/Header.svelte';
	import Login from '../components/LoginLogout/Login.svelte';
	import '../styles/fonts.css';
	import { session } from '../store/store.ts';
</script>

<svelte:head>
	<title>Casita</title>
</svelte:head>

<div>
	<Header />
	{#if $session.logged_in}
		<slot />
	{:else}
		<Login />
	{/if}
</div>

<style>
	:global(:root) {
		--primary-color: #94a684;
		--secondary-color: #aec3ae;
		--tertiary-color: #e4e4d0;
		--not-so-black: rgb(38, 38, 38);
	}
	:global(*) {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
		font-family: 'RobotoCondensed';
	}
	:global(body) {
		background-color: var(--tertiary-color);
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
</style>
