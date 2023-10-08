<script>
	import { session } from '$lib/store/session_store';
	import MdiExitToApp from '~icons/mdi/exit-to-app';
	const handleLogout = () => {
		session.set({});
	};
</script>

<span on:click={handleLogout} role="button" on:keypress={handleLogout} tabindex="0">
	<MdiExitToApp />
</span>

<style>
	span {
		margin-left: 5px;
		color: var(--font-color);
		cursor: pointer;
		position: relative;
		top: 3px;
	}
</style>
