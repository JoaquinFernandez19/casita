
<script >
    import Header from '../components/Header.svelte';
    import Login from '../components/Login.svelte';
    import Sections from '../components/Sections.svelte';
    import '../styles/fonts.css';

    let loggedIn = '';

    const handleLogin = () => {
        loggedIn = 'Joaquin';
    }

</script>

<svelte:head>
	<title>Casita</title>
</svelte:head>

<div class="container">
    <Header loggedIn={loggedIn}/>
    {#if !loggedIn}
        <Login logIn={handleLogin}/>
    {:else}
        <Sections />
    {/if}

  
</div>


<style>
    :global(:root){
        --primary-color: #94A684;
        --secondary-color: #AEC3AE;
        --tertiary-color: #E4E4D0;

    }
    :global(*) {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: 'RobotoCondensed';
    }
    :global(body){
        background-color: var(--tertiary-color);
    }
   
   .container {
        max-width: 1000px;
        margin: 0 auto;
   }
</style>


