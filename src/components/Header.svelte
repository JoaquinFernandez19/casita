<script lang="ts">
	import { onDestroy } from 'svelte';
	import Logo from '../components/Logo.svelte';
	import { session } from '$lib/store/store.ts';
	import Logout from './LoginLogout/Logout.svelte';

	let user_name: string | undefined = '';
	let logged_in = false;
	const unsubscribe = session.subscribe(({ user_name: userNameValue }) => {
		user_name = userNameValue;
		logged_in = !!userNameValue;
	});

	onDestroy(unsubscribe);
</script>

<div class:logged_in class="container">
	<Logo />
	{#if logged_in}
		<div>
			<p>{user_name}</p>
			<Logout />
		</div>
	{/if}
</div>

<style>
	div {
		background-color: var(--primary-color);
		height: 100px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
	}
	.logged_in {
		justify-content: space-between;
	}
	.logged_in p {
		color: var(--bg-color);
		font-size: 20px;
	}
</style>
