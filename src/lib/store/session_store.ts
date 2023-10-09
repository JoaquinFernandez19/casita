import { writable } from 'svelte/store';

function clientSessionMgmt() {
	const { subscribe, set } = writable<{ name: string | null; id: number } | null>();

	return {
		subscribe,
		set: (userData: { name: string | null; id: number } | null) => {
			set(userData);
		}
	};
}

export const clientSession = clientSessionMgmt();
