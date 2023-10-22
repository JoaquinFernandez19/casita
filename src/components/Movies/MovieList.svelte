<script lang="ts">
	import Movie from './Movie.svelte';
	import type { IMovie } from '../../routes/sections/movies/types';

	const movies: IMovie[] = [
		{
			name: 'George of the jungle',
			image:
				'https://m.media-amazon.com/images/M/MV5BNTdiM2VjYjYtZjEwNS00ZWU5LWFkZGYtZGYxMDcwMzY1OTEzL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTczNjQwOTY@._V1_.jpg',
			status: 'Vista',
			rating: 10,
			provider: 'Joaquin'
		},
		{
			name: 'Zooleander',
			image:
				'https://m.media-amazon.com/images/M/MV5BODI4NDY2NDM5M15BMl5BanBnXkFtZTgwNzEwOTMxMDE@._V1_FMjpg_UX1000_.jpg',
			status: 'Pendiente',
			rating: 5,
			provider: 'Joaquin'
		},
		{
			name: 'George of the jungle',
			image:
				'https://m.media-amazon.com/images/S/pv-target-images/d14d6db2e7fb2f90d64573c965587f04199e9927f58d3f5258d12284948c46b6.jpg',
			status: 'Cancelada',
			rating: 0,
			provider: 'Paz'
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
