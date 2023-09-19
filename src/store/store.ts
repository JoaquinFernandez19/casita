import { writable } from 'svelte/store';

export const session = writable<{ user_name?: string; user_img?: string; logged_in: boolean }>({
	logged_in: false
});
