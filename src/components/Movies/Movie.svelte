<script lang="ts">
	import type { IMovie } from '../../routes/sections/movies/types';

	export let movie: IMovie;
</script>

//TODO add better display of status

<div class="container">
	<div class="img" style={`background-image: url(${movie.image})`} />
	<div class="info">
		<div>
			<h1>{movie.name}</h1>
			<span class={'status-' + movie.status.toLocaleLowerCase()}>{movie.status}</span>
		</div>
		<p>{movie.provider}</p>
	</div>
	<span class="rating">{movie.rating}/10</span>
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: 1fr 2fr 1fr;
		grid-template-rows: 1fr 1fr;
		height: 150px;
		column-gap: 20px;
		padding: 10px;
		background-color: var(--bg-color-stronger);
		border-radius: 10px;
	}
	.status-watched {
		color: greenyellow;
	}
	.status-pending {
		color: red;
	}
	.img {
		grid-area: 1 / 1 / 3 / 2;
		background-color: rgb(62, 62, 62);
		width: 100%;
		height: 100%;
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;
	}
	.info {
		grid-area: 1 / 2 / 3 / 3;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		& span {
			font-size: 25px;
		}
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
