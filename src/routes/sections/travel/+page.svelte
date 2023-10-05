<script lang="ts">
	import { fade } from 'svelte/transition';
	import MdAccountBalanceWallet from 'svelte-icons/md/MdAccountBalanceWallet.svelte';
	import MdAirplanemodeActive from 'svelte-icons/md/MdAirplanemodeActive.svelte';
	import FaRegPlusSquare from 'svelte-icons/fa/FaRegPlusSquare.svelte';
	import FaRegWindowClose from 'svelte-icons/fa/FaRegWindowClose.svelte';
	import FaRegCheckSquare from 'svelte-icons/fa/FaRegCheckSquare.svelte';
	import IoMdBookmarks from 'svelte-icons/io/IoMdBookmarks.svelte';
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
			<div class="wallet_icon icon"><MdAccountBalanceWallet /></div>
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
			</div>
			<button class="wallet_history">
				History <div class="icon"><IoMdBookmarks /></div></button
			>
		</div>
		<div class="sub_section">
			<MdAirplanemodeActive />
		</div>
	</div>
</div>

<style>
	h1 {
		font-size: 40px;
	}
	button {
		background: transparent;
		cursor: pointer;
		border: none;
		justify-self: end;
		display: block;
	}
	.grid {
		display: grid;
		grid-template-columns: 1fr;
		margin-top: 50px;
		row-gap: 50px;
	}
	.sub_section {
		display: flex;
		width: auto;
		border-bottom: 2px solid white;
		display: grid;
		grid-template-columns: 100px 1fr 1fr;
		column-gap: 20px;
		row-gap: 20px;
		justify-items: start;
		align-items: center;
		@media (max-width: 1000px) {
			grid-template-columns: 50px 1fr 1fr;
			column-gap: 10px;
		}
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
		& button {
			font-size: 30px;
			width: 50px;
			height: 50px;
			@media (max-width: 1000px) {
				width: 25px;
				height: 25px;
				font-size: 20px;
			}
		}
	}
	.wallet_total {
		font-size: 80px;
		padding-left: 30px;
		@media (max-width: 1000px) {
			font-size: 30px;
			padding-left: 10px;
		}
	}
	.wallet_actions {
		justify-self: end;
	}
	.wallet_icon {
		height: auto;
		width: auto;
		@media (max-width: 1000px) {
			max-height: 50px;
			max-width: 50px;
		}
	}
	.wallet_history {
		grid-column: 1/4;
		border-top: 2px solid white;
		width: 100%;
		font-size: 30px;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 5px;
		padding: 10px 0;
		@media (max-width: 1000px) {
			font-size: 20px;
		}
		& .icon {
			width: 30px;
			height: 30px;
		}
	}
</style>
