<script lang="ts">
	import { fade } from 'svelte/transition';
	import Wallet from '../../../components/Travel/Wallet.svelte';
</script>

<div in:fade>
	<h1>Viajes & Ahorros</h1>
	<Wallet />
</div>

<style>
	h1 {
		font-size: 40px;
		text-align: center;
		border-bottom: 2px solid var(--font-color);
		padding-bottom: 5px;
		font-weight: 800;
		margin-bottom: 20px;
		@media (max-width: 1000px) {
			font-size: 25px;
		}
	}
</style>
