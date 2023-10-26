<script lang="ts">
	import Movie from './Movie.svelte';
	import type { IMovie } from '../../routes/sections/movies/types';
	export let movieList: IMovie[];
</script>

{#if movieList.length}
	<div>
		{#each movieList as movie}
			<Movie {movie} />
		{/each}
	</div>
{/if}

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
</style>
