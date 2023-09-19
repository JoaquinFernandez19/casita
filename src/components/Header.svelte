<script lang="ts">
	import { onDestroy } from 'svelte';
	import Logo from '../components/Logo.svelte';
	import { session } from '../store/store.ts';
	import Logout from './LoginLogout/Logout.svelte';

	let logged_in = false;
	let user_name: string | undefined = '';

	const unsubscribe = session.subscribe(
		({ logged_in: loggedInValue, user_name: userNameValue }) => {
			logged_in = loggedInValue;
			user_name = userNameValue;
		}
	);

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
	}
	.logged_in {
		justify-content: space-between;
	}
	.logged_in p {
		color: var(--tertiary-color);
		font-size: 20px;
	}
</style>
