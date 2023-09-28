<script lang="ts">
	import { onDestroy } from 'svelte';
	import Logo from '../components/Logo.svelte';
	import { session } from '$lib/store/store.ts';
	import Logout from './LoginLogout/Logout.svelte';
	import Theme from './Theme.svelte';

	let user_name: string | undefined = '';
	let logged_in = false;
	const unsubscribe = session.subscribe(({ user_name: userNameValue }) => {
		user_name = userNameValue;
		logged_in = !!userNameValue;
	});

	onDestroy(unsubscribe);
</script>

<div class:logged_in class="container header">
	<div class="user">
		{#if logged_in}
			<div>
				<p>{user_name}</p>
				<Logout />
			</div>
		{/if}
	</div>
	<div class="logo">
		<Logo />
	</div>
	<div class="actions">
		<Theme />
	</div>
</div>

<style>
	div {
		display: flex;
		align-items: center;
	}
	p {
		color: var(--bg-color);
		font-size: 20px;
	}
	.header {
		background-color: var(--primary-color);
		height: 100px;
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
	}
	.logo {
		grid-column: 2/3;
		justify-self: center;
	}
	.actions {
		grid-column: 3/4;
		justify-self: end;
	}
</style>
