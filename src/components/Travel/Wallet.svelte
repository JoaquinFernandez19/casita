<script lang="ts">
	import { format } from 'date-fns';

	import MdCash from '~icons/mdi/cash-multiple';
	import MdPlusBox from '~icons/mdi/plus-box-outline';
	import Modal from '../Modal.svelte';
	import { clientSession } from '$lib/store/session_store';
	import { formatMoney } from '../../lib/helpers/formatter';
	import type { HistoryRegister } from '$lib/types/wallet_history';
	import History from './History.svelte';

	export let walletHistory: HistoryRegister[];
	export let walletTotal: number;
	let modalOpen = false;
	let input: number | null;

	const toggleModal = () => {
		modalOpen = !modalOpen;
		input = null;
	};

	const handleSubmitChange = () => {
		if (input && !isNaN(input)) {
			const register = {
				amount: Number(input),
				date: format(new Date(), 'dd/MM/yyyy'),
				prevAmount: walletTotal,
				userName: $clientSession?.name || 'Hacerman',
				user: $clientSession?.id || 1
			};
			walletHistory = [...walletHistory, register];
			addHistoryRegister(register);
			walletTotal += Number(input);
			toggleModal();
		}
	};

	const addHistoryRegister = async (register: HistoryRegister) => {
		await fetch('/sections/travel', {
			method: 'POST',
			body: JSON.stringify(register),
			headers: {
				'Content-Type': 'application/json'
			}
		});
	};
</script>

<div class="main">
	<div class="icon_lg cash"><MdCash /></div>
	<div class="total">{walletTotal === 0 ? 'Cargando...' : formatMoney(walletTotal)}</div>
	<div class="actions">
		<button on:click={toggleModal} class="icon_md">
			<MdPlusBox />
		</button>
	</div>

	<History {walletHistory} />
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
