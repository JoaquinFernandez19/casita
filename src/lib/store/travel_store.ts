import { writable } from 'svelte/store';
import { browser } from '$app/environment';

import { WalletGetRequestTypes } from '../types/requests';
import { walletRegisterDTO } from '../helpers/formatter';
import type { HistoryRegister, HistoryRegisterDB } from '../types/wallet_history';

function historyManagement() {
	const { subscribe, update, set } = writable<HistoryRegister[]>([]);

	(async function get() {
		if (!browser) return;
		const response = await fetch(`/sections/travel?type=${WalletGetRequestTypes.History}`);

		if (response && response.status === 200) {
			const { data } = await response.json();

			if (data.length)
				set(data.map((registerDB: HistoryRegisterDB) => walletRegisterDTO(registerDB)));
		}
	})();

	const addHistoryRegister = async (register: HistoryRegister) => {
		await fetch('/sections/travel', {
			method: 'POST',
			body: JSON.stringify(register),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		update((curr) => {
			return [...curr, register];
		});
	};

	return {
		subscribe,
		addHistoryRegister
	};
}

function walletManagement() {
	const { subscribe, update, set } = writable<number>(0);
	(async function get() {
		if (!browser) return;
		const response = await fetch(`/sections/travel?type=${WalletGetRequestTypes.Total}`);

		if (response && response.status === 200) {
			const { data } = await response.json();
			if (data) set(data[0].amount);
		}
	})();

	return {
		subscribe,
		update: (newWalletAmount: number) => {
			update((curr) => (curr += newWalletAmount));
		}
	};
}

export const wallet = walletManagement();
export const history = historyManagement();
