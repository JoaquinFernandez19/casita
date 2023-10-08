<script>
	import MdiChevronLeft from '~icons/mdi/chevron-left';
</script>

<div class="container section_layout">
	<a href="/">
		<span class="icon"><MdiChevronLeft /></span>
		<p>Atrás</p>
	</a>
</div>

<div class="slot container">
	<slot />
</div>

<style>
	.section_layout {
		margin-top: 40px;
		position: absolute;
		left: 0;

		@media (max-width: 1000px) {
			margin-top: 35px;
		}
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
	.icon {
		font-size: 17px;
		line-height: 10px;
	}
	p {
		@media (max-width: 1000px) {
			display: none;
		}
	}
</style>
