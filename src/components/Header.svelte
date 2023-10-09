<script lang="ts">
	import Logo from '../components/Logo.svelte';
	import Logout from './LoginLogout/Logout.svelte';
	import Theme from './Theme.svelte';

	import { clientSession } from '$lib/store/session_store';
</script>

<div class="container header">
	<div>
		{#if $clientSession}
			<div class="user">
				<p>{$clientSession.name}</p>
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
		color: var(--font-color);
		font-size: 20px;
	}
	.user {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.header {
		background-color: var(--primary-color);
		height: 80px;
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		@media (max-width: 1000px) {
			border-radius: 0;
			height: 80px;
		}
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
