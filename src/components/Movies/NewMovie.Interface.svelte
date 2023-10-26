<script lang="ts">
	import { onMount } from 'svelte';
	import type { IApiMovie, MovieDB } from '../../routes/sections/movies/types';
	import TextSearchVariant from '~icons/mdi/text-search-variant';
	import { clientSession } from '$lib/store/session_store';
	import { goto } from '$app/navigation';

	let movieNameInput: HTMLInputElement;
	let errorOnSearch: boolean = false;
	let ratingInput: string;
	let watchedChecked: boolean = false;
	let searchResult: IApiMovie | null;
	let searching: boolean = false;

	onMount(() => {
		movieNameInput.value = '';
		movieNameInput.focus();
	});

	const handleSearchMovie = async () => {
		const movieName = movieNameInput.value;
		if (!movieName || movieName.length < 3) return;

		const res = await fetch(`/sections/movies/search?keyword=${movieName}`, {
			method: 'GET'
		});
		if (res && res.status === 200) {
			const data = await res.json();
			if (data.Error) return (errorOnSearch = true);
			searchResult = data;
		}
	};
	const clearSearch = () => {
		searchResult = null;
		searching = false;
		watchedChecked = false;
		ratingInput = '0';
		movieNameInput.value = '';
		goto('');
	};

	const handleAddMovie = async () => {
		if (!searchResult || !$clientSession) return;
		const movieToAdd: MovieDB = {
			movie_id: searchResult.imdbID,
			rating: watchedChecked ? Number(ratingInput) : 0,
			status: watchedChecked ? 'Vista' : 'Pendiente',
			user: $clientSession.id,
			img: searchResult.Poster,
			name: searchResult.Title,
			year: searchResult.Year
		};
		await fetch('/sections/movies', {
			method: 'POST',
			body: JSON.stringify(movieToAdd),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		clearSearch();
	};
</script>

<div class="container">
	<div class="search-container">
		<input
			type="text"
			class="search-input"
			bind:this={movieNameInput}
			on:keydown={(e) => {
				if (e.key === 'Enter') handleSearchMovie();
			}}
		/>
		<button class="icon_md" on:click={handleSearchMovie}> <TextSearchVariant /> </button>
	</div>
	<div class="search-result">
		{#if searching}
			<p>Loading</p>
		{:else if searchResult}
			<div class="search-result-movie">
				<img src={searchResult.Poster} alt="poster" />
				<div>
					<h1>{searchResult.Title}</h1>
					<h2>{searchResult.Genre}</h2>
				</div>
				<p>{searchResult.Year}</p>
			</div>
		{/if}
	</div>
	{#if searchResult}
		<div class="actions">
			<div>
				<label for="status"> Vista? </label>
				<input bind:checked={watchedChecked} type="checkbox" name="status" id="status" />
			</div>
			{#if watchedChecked}
				<div>
					<label for="score">Score </label>
					<select bind:value={ratingInput} name="score" id="score">
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>
						<option value="10">10</option>
					</select>
				</div>
			{/if}
			<button on:click={handleAddMovie}> Agregar </button>
		</div>
	{/if}
</div>

<style>
	.container {
		padding: 20px;
		padding-top: 0px;
		display: grid;
		grid-template-rows: 50px 1fr auto;
		row-gap: 10px;
		border: 1px solid var(--font-color);
		border-radius: 10px;
		padding: 10px;
		margin-bottom: 10px;
	}
	.search-container {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 10px;
		border-bottom: 1px solid var(--font-color);
		padding-bottom: 5px;
		& input {
			background-color: transparent;
			border: transparent;
			width: 100%;
			color: var(--font-color);
		}
	}
	.search-result-movie {
		display: grid;
		grid-template-columns: 1fr 2fr 1fr;
		text-align: center;
		justify-items: center;
		align-items: center;

		& h2 {
			font-size: 15px;
		}
		& p {
			font-size: 25px;
			font-style: italic;
		}
	}
	.actions {
		display: flex;
		justify-content: center;
		gap: 20px;
		align-items: center;
		height: 40px;
		border-top: 1px solid var(--font-color);
		padding-top: 10px;
		& > div {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 5px;
			font-size: 20px;
		}
		& #status {
			height: 20px;
			outline: none;
			border: none;
			width: 20px;
			border-radius: 5px;
		}
		& #score {
			width: 50px;
			color: black;
			border-radius: 5px;
			outline: none;
			border: none;
			padding: 5px;
			cursor: pointer;
			& option {
				color: black;
			}
		}
		& #score:focus {
			outline: none;
		}
		& button {
			font-size: 20px;
			background-color: var(--primary-color);
			padding: 5px 10px;
			border-radius: 5px;
		}
	}
	img {
		height: 150px;
	}
</style>
