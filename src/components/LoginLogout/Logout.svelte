<script>
	import MdExitToApp from 'svelte-icons/md/MdExitToApp.svelte';

	import { session } from '../../store/store.ts';

	const handleLogout = () => {
		session.set({
			logged_in: false
		});
	};
</script>

<span on:click={handleLogout} role="button" on:keypress={handleLogout} tabindex="0">
	<MdExitToApp />
</span>

<style>
	span {
		width: 20px;
		height: 20px;
		margin-left: 10px;
		color: var(--tertiary-color);
		cursor: pointer;
	}
</style>
