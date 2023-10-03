<script>
	import MdChevronLeft from 'svelte-icons/md/MdChevronLeft.svelte';
</script>

<div class="container section_layout">
	<a href="/">
		<span class="icon"><MdChevronLeft /></span>
		Atrás
	</a>
</div>

<div class="slot container">
	<slot />
</div>

<style>
	.section_layout {
		margin-top: 40px;
		position: absolute;
		right: 0;
	}
	.slot {
		margin-top: 30px;
	}

	a {
		text-decoration: none;
		color: var(--font-color);
		font-size: 20px;
		display: flex;
		justify-content: flex-end;
		cursor: pointer;
		position: relative;
		align-items: center;
		z-index: 20;
	}
</style>
