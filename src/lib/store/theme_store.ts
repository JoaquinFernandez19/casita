import { writable } from 'svelte/store';

export enum Themes {
	Dark = 'dark',
	light = 'light'
}

type TThemes = 'dark' | 'light';

function themeManagement() {
	const { subscribe, update } = writable<TThemes | null>(getThemeFromLocalStorage());

	function saveThemeToLocalStorage(theme: string) {
		localStorage.setItem('theme', theme);
	}
	function getThemeFromLocalStorage() {
		if (typeof window == 'undefined') return Themes.Dark;
		if (!localStorage.getItem('theme')) return Themes.Dark;
		const themeFromLocalStorage = localStorage.getItem('theme') as Themes.Dark | Themes.light;
		return themeFromLocalStorage;
	}
	return {
		subscribe,
		toggle: () =>
			update((curr) => {
				const selectedTheme = curr === Themes.light ? Themes.Dark : Themes.light;
				saveThemeToLocalStorage(selectedTheme);
				return selectedTheme;
			})
	};
}

export const theme = themeManagement();
