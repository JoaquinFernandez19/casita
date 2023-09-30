<script>
	import MdExitToApp from 'svelte-icons/md/MdExitToApp.svelte';

	import { session } from '$lib/store/session_store';

	const handleLogout = () => {
		session.set({});
	};
</script>

<span on:click={handleLogout} role="button" on:keypress={handleLogout} tabindex="0" class="icon">
	<MdExitToApp />
</span>

<style>
	span {
		margin-left: 10px;
		color: var(--bg-color);
		cursor: pointer;
	}
</style>
