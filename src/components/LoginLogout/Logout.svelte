<script>
	import MdiExitToApp from '~icons/mdi/exit-to-app';
</script>

<form action="/logout" method="POST">
	<button>
		<MdiExitToApp />
	</button>
</form>

<style>
	button {
		margin-left: 5px;
		color: var(--font-color);
		cursor: pointer;
		position: relative;
		top: 3px;
	}
</style>
