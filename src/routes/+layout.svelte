<script>
	import Header from '../components/Header.svelte';
	import '../styles/fonts.css';
</script>

<svelte:head>
	<title>Casita</title>
</svelte:head>

<div class="container">
	<Header />

	<slot />
</div>

<style>
	:global(:root) {
		--primary-color: #94a684;
		--secondary-color: #aec3ae;
		--tertiary-color: #e4e4d0;
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

	.container {
		max-width: 1000px;
		margin: 0 auto;
	}
</style>
