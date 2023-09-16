<script>
	import Login from '../../components/Login.svelte';
	let loggedIn = '';

	const handleLogin = () => {
		loggedIn = 'Joaquin';
	};
</script>

<Login logIn={handleLogin} />
