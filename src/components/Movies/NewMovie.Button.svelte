<script lang="ts">
	import PlusBoxOutline from '~icons/mdi/plus-box-outline';

	export let toggleDisplayInterface: () => void;
</script>

<button class="icon_md plus" on:click={toggleDisplayInterface}>
	<PlusBoxOutline />
</button>

<style>
	.plus {
		position: absolute;
		right: 45px;
		top: 0;
		@media (max-width: 748px) {
			right: 20px;
		}
	}
</style>
