<script lang="ts">
	import { session } from '$lib/store/session_store';
	import { fade } from 'svelte/transition';
	let pwInput = '';
	let loginErrror = false;
	const handleLogin = async () => {
		loginErrror = false;
		const response = await fetch('/validate_login', {
			method: 'POST',
			body: JSON.stringify({ password: pwInput }),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const responseJson = await response.json();
		if (responseJson.error) return (loginErrror = true);
		session.set({
			user_name: responseJson.userName
		});
	};

	$: if (loginErrror) {
		setTimeout(function () {
			loginErrror = false;
		}, 3000);
	}
</script>

<div class="container">
	<div class="container_inner card">
		<form on:submit={handleLogin}>
			<p>Contraseña</p>
			<input type="password" bind:value={pwInput} />
		</form>
		<button on:click={handleLogin}> Ingresar </button>
		{#if loginErrror}
			<div class="login_error" transition:fade>Contraseña incorrecta :(</div>
		{/if}
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
		position: relative;
	}
	p {
		margin-bottom: 10px;
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
