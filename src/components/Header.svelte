<script lang="ts">
	import Logo from '../components/Logo.svelte';
	import { session } from '../store/store.ts';

	const { logged_in, user_name } = $session;
</script>

<div class:logged_in>
	<Logo />
	{#if logged_in}
		<p>{user_name}</p>
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
		padding: 0 50px;
	}
	.logged_in p {
		color: var(--tertiary-color);
		font-size: 20px;
	}
</style>
