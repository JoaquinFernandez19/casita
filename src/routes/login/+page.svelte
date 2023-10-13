<script lang="ts">
	import { fade } from 'svelte/transition';
	export let form;

	let loginError: boolean;

	$: loginError = !!form;

	$: if (loginError) {
		setTimeout(function () {
			loginError = false;
		}, 3000);
	}
</script>

<div class="container">
	<div class="container_inner card">
		<form method="POST" action="/login">
			<div>
				<p>Email</p>
				<input type="email" name="email" />
			</div>
			<div>
				<p>Contraseña</p>
				<input type="password" name="password" />
			</div>
			<button> Ingresar </button>
		</form>
		{#if loginError}
			<div class="login_error" transition:fade>Contraseña incorrecta :(</div>
		{/if}
	</div>
</div>

<style>
	* {
		font-size: 20px;
		color: var(--font-color);
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 20px;
		& > div {
			display: flex;
			flex-direction: column;
		}
	}
	div {
		display: flex;
	}
	div.container {
		height: 400px;
		justify-content: center;
		align-items: center;
	}
	div.container_inner {
		row-gap: 20px;
		flex-direction: column;
		position: relative;
	}
	p {
		margin-bottom: 5px;
		color: var(--font-color);
	}
	input {
		outline: none;
		border: 2px solid transparent;
		padding: 10px 5px;
		color: black;
	}
	.login_error {
		background: rgb(255, 96, 96);
		border-radius: 10px;
		padding: 10px 20px;
		position: absolute;
		bottom: -60px;
		width: 100%;
		left: 0;
		text-align: center;
		justify-content: center;
	}
	button {
		background-color: var(--primary-color);
		padding: 10px 5px;
		cursor: pointer;
		border: none;
		border-radius: 5px;
	}
</style>
