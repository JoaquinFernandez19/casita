<script lang="ts">
	import type { IMovie } from '../../routes/sections/movies/types';

	export let movie: IMovie;
</script>

<div class="container">
	<div class="img" style={`background-image: url(${movie.image})`} />
	<div class="info">
		<div>
			<h1>{movie.name}</h1>
			<p>{movie.provider}</p>
		</div>
	</div>
	<span class={'status ' + movie.status.toLocaleLowerCase()}>{movie.status}</span>

	<span class="rating">{movie.rating}/10</span>
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: 150px 2fr 1fr;
		grid-template-rows: 1fr 1fr;
		height: 190px;
		column-gap: 20px;
		padding: 15px;
		background-color: var(--bg-color-stronger);
		border-radius: 10px;
	}

	.status {
		grid-area: 1 / 3 / 2 / 4;
		font-size: 18px;
		padding: 5px 10px;
		border-radius: 5px;
		color: white;
		display: flex;
		justify-self: end;
		align-self: start;
	}
	.vista {
		background-color: rgb(109, 181, 0);
	}
	.pendiente {
		background-color: orange;
	}
	.cancelada {
		background-color: red;
	}
	.img {
		grid-area: 1 / 1 / 3 / 2;
		background-color: rgb(62, 62, 62);
		width: 100%;
		height: 100%;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}
	.info {
		grid-area: 1 / 2 / 3 / 3;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.rating {
		grid-area: 2 / 3 / 3 / 4;
		font-size: 30px;
		justify-self: flex-end;
		align-self: flex-end;
		padding: 10px;
		font-weight: bolder;
	}
</style>
