<script lang="ts">
	import { clientSession } from './../lib/store/session_store.ts';
	import Header from '../components/Header.svelte';
	import Login from '../components/LoginLogout/Login.svelte';
	import '../styles/fonts.css';
	import '../styles/global.postcss';
	import { theme } from '$lib/store/theme_store';

	import { onMount } from 'svelte';
	import { invalidateAll } from '$app/navigation';

	export let data;

	let { supabase, session, userData } = data;
	$: ({ supabase, session } = data);

	$: clientSession.set(userData);

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange(() => {
			invalidateAll();
		});
		return () => subscription.unsubscribe();
	});
</script>

<svelte:head>
	<title>Casita Lemon</title>
</svelte:head>

<div class={`${$theme} base`}>
	<div class="app">
		<Header />
		{#if session}
			<slot />
		{:else}
			<Login />
		{/if}
	</div>
</div>

<style>
	.app {
		max-width: 1000px;
		margin: 0 auto;
		height: 100%;
		position: relative;
	}
	.base {
		--bg-color: rgb(99, 99, 99);
		min-height: 100vh;
		width: 100%;
		position: relative;
		background-color: var(--bg-color);
		transition: background-color 0.2s ease-in;
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
</style>
