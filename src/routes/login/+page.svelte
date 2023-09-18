<script lang="ts">
	import Login from '../../components/Login.svelte';
	import { session } from '../../store/store.ts';

	const handleLogin = () => {
		session.update((session) => ({ ...session, loggedIn: true, user_name: 'Pedro' }));
	};
</script>

<Login logIn={handleLogin} />
