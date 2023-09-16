<script lang="ts">
	import Logo from '../components/Logo.svelte';
	export let loggedIn: string = '';
</script>

<div class:loggedIn>
	<Logo />
	{#if loggedIn}
		<p>{loggedIn}</p>
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
	.loggedIn {
		justify-content: space-between;
		padding: 0 50px;
	}
	.loggedIn p {
		color: var(--tertiary-color);
		font-size: 25px;
	}
</style>
