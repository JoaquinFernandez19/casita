<script lang="ts">
	import { session } from '$lib/store/store.ts';
	import { validateUserLogin } from '$lib';
	let pwInput = '';

	const handleLogin = () => {
		const loggedInUser = validateUserLogin(pwInput);
		if (!loggedInUser) return;
		session.set({
			user_name: loggedInUser.name
		});
	};
</script>

<div class="container">
	<div class="container_inner card">
		<form on:submit={handleLogin}>
			<p>Contraseña</p>
			<input type="password" bind:value={pwInput} />
		</form>
		<button on:click={handleLogin}> Ingresar </button>
	</div>
</div>

<style>
	* {
		font-size: 20px;
		color: var(--font-color);
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
		padding-left: 50px;
		padding-right: 50px;
	}
	p {
		margin-bottom: 10px;
		color: var(--font-color);
	}
	input {
		outline: none;
		border: none;
		padding: 10px 5px;
		color: black;
	}
	button {
		background-color: var(--primary-color);
		padding: 10px 5px;
		cursor: pointer;
		border: none;
		border-radius: 5px;
	}
</style>
