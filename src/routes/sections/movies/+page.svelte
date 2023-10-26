<script lang="ts">
	import { fade } from 'svelte/transition';
	import MovieList from '../../../components/Movies/MovieList.svelte';
	import NewMovieButton from '../../../components/Movies/NewMovie.Button.svelte';
	import NewMovieInterface from '../../../components/Movies/NewMovie.Interface.svelte';
	import type { IMovie } from './types';
	export let data;

	let movieList: IMovie[];

	$: movieList = data.movies || [];
	console.log(data);
	let addingMovie: boolean = false;
	const toggleDisplayInterface = () => {
		addingMovie = !addingMovie;
	};
</script>

<div in:fade>
	<h1>Biblioteca de peliculas <NewMovieButton {toggleDisplayInterface} /></h1>
	{#if addingMovie}
		<NewMovieInterface />
	{/if}
	<MovieList {movieList} />
</div>

<style>
	h1 {
		font-size: 40px;
		text-align: center;
		border-bottom: 2px solid var(--font-color);
		padding-bottom: 5px;
		font-weight: 800;
		margin-bottom: 20px;
		@media (max-width: 1000px) {
			font-size: 25px;
		}
	}
</style>
