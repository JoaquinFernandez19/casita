<script lang="ts">
	import { fade } from 'svelte/transition';
	import MdAccountBalanceWallet from 'svelte-icons/md/MdAccountBalanceWallet.svelte';
	import MdAirplanemodeActive from 'svelte-icons/md/MdAirplanemodeActive.svelte';
	import FaRegPlusSquare from 'svelte-icons/fa/FaRegPlusSquare.svelte';
	import FaRegWindowClose from 'svelte-icons/fa/FaRegWindowClose.svelte';
	import FaRegCheckSquare from 'svelte-icons/fa/FaRegCheckSquare.svelte';

	let openWalletModification = false;
	let walletModificationInput: number | null;
	let walletTotal = 0;
	let walletsModifications: {
		user: string;
		amount: number;
		date: string;
	}[] = [];

	const handleToggleWalletModication = () => {
		openWalletModification = !openWalletModification;
		walletModificationInput = null;
	};

	const handleSubmitModification = () => {
		if (walletModificationInput && !isNaN(walletModificationInput)) {
			walletTotal += Number(walletModificationInput);
			walletsModifications = [
				...walletsModifications,
				{
					user: 'Joaquin',
					amount: walletModificationInput,
					date: '2/11/2023'
				}
			];
		}
	};
</script>

<div in:fade>
	<h1>Viajes</h1>

	<div class="grid">
		<div class="sub_section">
			<MdAccountBalanceWallet />
			<div class="wallet_total">${walletTotal.toLocaleString('en-US')}</div>
			<div class="wallet_actions">
				<div class="wallet_modification">
					{#if openWalletModification}
						<input type="text" bind:value={walletModificationInput} />
					{/if}
					<div>
						{#if openWalletModification}
							<button on:click={handleSubmitModification}>
								<FaRegCheckSquare />
							</button>
							<button on:click={handleToggleWalletModication}>
								<FaRegWindowClose />
							</button>
						{:else}
							<button on:click={handleToggleWalletModication}>
								<FaRegPlusSquare />
							</button>
						{/if}
					</div>
				</div>
				<button> History </button>
			</div>
		</div>
		<div class="sub_section">
			<MdAirplanemodeActive />
		</div>
	</div>
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: 1fr;
		margin-top: 50px;
		row-gap: 50px;
	}
	h1 {
		font-size: 40px;
	}
	.sub_section {
		display: flex;
		widows: 100px;
		width: auto;
		padding: 20px;
		padding-bottom: 50px;
		border-bottom: 2px solid white;
		display: grid;
		grid-template-columns: 100px 1fr 1fr;
		column-gap: 20px;
		justify-items: start;
		align-items: center;
	}

	button {
		background: transparent;
		cursor: pointer;
		border: none;
		font-size: 30px;
		justify-self: end;
		display: block;
		width: 50px;
		height: 50px;
	}

	.wallet_modification {
		justify-self: end;
		display: flex;
		gap: 20px;
		& > input {
			outline: none;
			border: 2px solid transparent;
			padding: 10px 5px;
			color: black;
			font-size: 20px;
			border-radius: 10px;
		}

		& > div {
			display: flex;
			gap: 10px;
		}
	}
	.wallet_total {
		font-size: 80px;
		padding-left: 30px;
	}
	.wallet_actions {
		justify-self: end;
	}
</style>
