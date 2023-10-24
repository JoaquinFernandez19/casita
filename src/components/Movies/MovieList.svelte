<script lang="ts">
	import Movie from './Movie.svelte';
	import type { IMovie } from '../../routes/sections/movies/types';

	const movies: IMovie[] = [];
</script>

<div>
	{#each movies as movie}
		<Movie {movie} />
	{/each}
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
</style>
