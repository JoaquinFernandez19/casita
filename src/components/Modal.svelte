<script lang="ts">
	import MdClose from '~icons/mdi/close-box-outline';
	import { fade } from 'svelte/transition';
	export let {
		title,
		onClose
	}: {
		title?: string;
		onClose?: () => void;
	} = {};

	const handleClose = () => {
		onClose && onClose();
	};
</script>

<div class="modal" transition:fade>
	<div class="bg" />
	<div class="content">
		<div class="head">
			<h1>{title}</h1>
			<button class="close icon_md" on:click={handleClose}><MdClose /></button>
		</div>

		<slot />
	</div>
</div>

<style>
	h1 {
		font-size: 30px;
	}
	.modal {
		position: fixed;
		height: 100%;
		width: 100%;
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 100;
	}
	.bg {
		position: absolute;
		background-color: rgb(0, 0, 0);
		opacity: 0.3;
		height: 100%;
		width: 100%;
		z-index: 1;
	}
	.content {
		position: absolute;
		z-index: 2;
		background-color: var(--bg-color-stronger);
		padding: 30px 40px;
		min-width: 300px;
		border-radius: 10px;
	}

	.head {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 20px;
	}
	.close {
		position: relative;
		top: -10px;
		right: -10px;
	}
</style>
