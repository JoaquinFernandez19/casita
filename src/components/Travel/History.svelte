<script lang="ts">
	import type { HistoryRegister } from '$lib/types/wallet_history';
	import { slide } from 'svelte/transition';
	import { formatMoney } from '../../lib/helpers/formatter';
	import { format } from 'date-fns';
	import MdList from '~icons/mdi/format-list-bulleted-square';

	export let walletHistory: HistoryRegister[];

	let historyOpen = false;

	const toggleHistory = () => {
		if (!history.length) return;
		historyOpen = !historyOpen;
	};
</script>

<div class="history">
	<button class="icon_md" on:click={toggleHistory}> <MdList /></button>
	{#if historyOpen}
		<div class="register" transition:slide>
			{#each walletHistory as { date, amount, userName }}
				<div>
					<p>{userName}</p>
					<div>
						<p>{amount > 0 ? '+' + formatMoney(amount) : '-' + formatMoney(amount)}</p>
					</div>
					<p>{format(new Date(date), 'dd/MM/yyyy')}</p>
				</div>
			{/each}
		</div>
	{/if}
</div>

<style>
	.history {
		grid-column: 1/4;
		border-top: 1px solid var(--font-color);
		width: 100%;
		display: flex;
		align-items: end;
		flex-direction: column;
		padding: 10px 0;
		& .register {
			width: 100%;
			display: flex;
			flex-direction: column;
			gap: 10px;
			padding-top: 20px;
			max-height: 200px;
			& > div {
				display: grid;
				grid-template-columns: 1fr 2fr 1fr;
				gap: inherit;
				padding-bottom: 10px;
				& > div {
					display: flex;
					gap: inherit;
				}
			}
		}
		& .icon {
			width: 30px;
			height: 30px;
		}
		& button {
			font-size: 30px;
			font-size: 20px;
			gap: 5px;
		}
		@media (max-width: 1000px) {
			padding: 5px 0;
		}
	}
</style>
