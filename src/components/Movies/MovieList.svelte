<script lang="ts">
	import Movie from './Movie.svelte';
	import type { IMovie } from '../../routes/sections/movies/types';

	const movies: IMovie[] = [
		{
			name: 'George of the jungle',
			image:
				'https://m.media-amazon.com/images/M/MV5BNTdiM2VjYjYtZjEwNS00ZWU5LWFkZGYtZGYxMDcwMzY1OTEzL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTczNjQwOTY@._V1_.jpg',
			status: 'Watched',
			rating: 10,
			provider: 'Joaquin'
		},
		{
			name: 'George of the jungle',
			image:
				'https://m.media-amazon.com/images/M/MV5BNTdiM2VjYjYtZjEwNS00ZWU5LWFkZGYtZGYxMDcwMzY1OTEzL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTczNjQwOTY@._V1_.jpg',
			status: 'Pending',
			rating: 5,
			provider: 'Joaquin'
		}
	];
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
