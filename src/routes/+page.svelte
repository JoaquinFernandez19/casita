<script>
	import Sections from '../components/Sections.svelte';
</script>

<div class="main">
	<Sections />

	<div class="cats container">
		<img src="/jin.png" alt="" />
		<img src="/simona.png" alt="" />
	</div>
</div>

<style>
	.cats {
		position: absolute;
		bottom: 0;
		right: 0;
		left: 0;
		max-width: 1000px;
		margin: 0 auto;
		display: flex;
		justify-content: center;
	}
	img {
		opacity: 0.3;
		width: 50px;
	}
</style>
