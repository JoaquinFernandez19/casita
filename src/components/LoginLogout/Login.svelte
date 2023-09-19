<script lang="ts">
	import { session } from '../../store/store.ts';

	const handleLogin = () => {
		session.set({
			logged_in: true,
			user_name: 'Joaquin'
		});
	};
</script>

<div class="container">
	<div class="container_inner">
		<span>
			<p>Contraseña</p>
			<input type="password" />
		</span>
		<button on:click={handleLogin}> Ingresar </button>
	</div>
</div>

<style>
	* {
		font-size: 20px;
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
	}
	p {
		margin-bottom: 10px;
	}
	input {
		outline: none;
		border: none;
		padding: 10px 5px;
	}
	button {
		background-color: var(--primary-color);
		color: var(--tertiary-color);
		padding: 10px 5px;
		cursor: pointer;
		border: none;
		border-radius: 5px;
		&:hover {
			background-color: var(--secondary-color);
		}
	}
</style>
