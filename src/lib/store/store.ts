import { writable } from 'svelte/store';

export const session = writable<{ user_name?: string }>({});