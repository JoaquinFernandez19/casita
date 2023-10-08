<script lang="ts">
	import { format } from 'date-fns';
	import { slide } from 'svelte/transition';

	import MdCash from '~icons/mdi/cash-multiple';
	import MdPlusBox from '~icons/mdi/plus-box-outline';
	import MdList from '~icons/mdi/format-list-bulleted-square';
	import Modal from '../Modal.svelte';

	import { history, wallet } from '$lib/store/travel_store';
	import { session } from '../../lib/store/session_store';

	import { formatMoney } from '../../lib/helpers/formatter';

	let modalOpen = false;
	let historyOpen = false;
	let input: number | null;

	const toggleModal = () => {
		modalOpen = !modalOpen;
		input = null;
	};

	const toggleHistory = () => {
		if (!$history.length) return;
		historyOpen = !historyOpen;
	};

	const handleSubmitChange = () => {
		if (input && !isNaN(input)) {
			history.addHistoryRegister({
				amount: Number(input),
				date: format(new Date(), 'dd/MM/yyyy'),
				prevAmount: $wallet,
				user: $session.user_name || 'Hackerman'
			});
			wallet.update(Number(input));
		}
		toggleModal();
	};

	$: console.log($history);
</script>

<div class="main">
	<div class="icon_lg cash"><MdCash /></div>
	<div class="total">{formatMoney($wallet)}</div>
	<div class="actions">
		<button on:click={toggleModal} class="icon_md">
			<MdPlusBox />
		</button>
	</div>
	<div class="history">
		<button class="icon_md" on:click={toggleHistory}> <MdList /></button>
		{#if historyOpen}
			<div class="register" transition:slide>
				{#each $history as { date, amount, user, prevAmount }, i}
					<div>
						<p>{user}</p>
						<div>
							<p>{amount > 0 ? '+' + formatMoney(amount) : '-' + formatMoney(amount)}</p>
						</div>
						<p>{format(new Date(date), 'dd/MM/yyyy')}</p>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</div>
{#if modalOpen}
	<Modal title="Agregar fondo" onClose={toggleModal}>
		<div class="modal_content">
			<input
				type="text"
				bind:value={input}
				on:keydown={(e) => {
					if (e.key === 'Enter') handleSubmitChange();
				}}
			/>
			<button on:click={handleSubmitChange}> Confirmar </button>
		</div>
	</Modal>
{/if}

<style>
	button {
		background: transparent;
		cursor: pointer;
		border: none;
		justify-self: end;
		display: block;
	}
	.cash {
		position: relative;
		bottom: 5px;
		left: 2px;
		@media (max-width: 1000px) {
			bottom: 4px;
			left: 2px;
		}
	}
	.main {
		background-color: var(--bg-color-stronger);
		border: 1px solid var(--font-color);
		padding: 10px;
		padding-bottom: 0;
		padding-top: 20px;
		border-radius: 10px;
		display: flex;
		width: auto;
		display: grid;
		grid-template-columns: 100px 1fr 1fr;
		column-gap: 20px;
		row-gap: 20px;
		justify-items: start;
		align-items: center;
		@media (max-width: 1000px) {
			grid-template-columns: 40px 1fr 1fr;
			column-gap: 10px;
		}
	}
	.total {
		font-size: 80px;
		padding-left: 30px;
		@media (max-width: 1000px) {
			font-size: 30px;
			padding-left: 10px;
		}
	}
	.actions {
		justify-self: end;
	}
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
	.modal_content {
		display: flex;
		flex-direction: column;
		gap: 5px;
		& input {
			width: 100%;
			height: 40px;
			border: none;
		}
		& button {
			background-color: var(--primary-color);
			color: var(--font-color);
			font-size: 20px;
			height: 40px;
		}
	}
</style>
