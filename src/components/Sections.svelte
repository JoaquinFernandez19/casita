<script>
	import { fade } from 'svelte/transition';

	const sections = [
		{
			title: 'Suministros',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
			img: '/supplies.png'
		},
		{
			title: 'Peliculas & Series',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
			img: '/movie.png'
		},
		{
			title: 'Viajes & Ahorros',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
			img: '/travel.png',
			path: '/sections/travel'
		},
		{
			title: 'Salud & Gimnasio',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
			img: '/terry.png'
		}
	];
</script>

<div class="container" in:fade>
	<div class="sections">
		{#each sections as { title, img, path }}
			<a href={path}>
				<div class="badge" style="--image: url({img});">
					<p>{title}</p>
				</div>
			</a>
		{/each}
	</div>
</div>

<style>
	.sections {
		display: flex;
		flex-direction: column;
		gap: 20px;
		margin-top: 20px;
		padding-bottom: 30px;
	}
	.badge {
		cursor: pointer;
		border-radius: 10px;
		height: 150px;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: border 0.1s ease-in-out;
		& > p {
			z-index: 1;
			color: var(--font-color);
			font-weight: bolder;
			padding-left: 30px;
			font-size: 40px;
			text-align: center;
			@media (max-width: 748px) {
				font-weight: bold;
				font-size: 30px;
			}
		}

		&:hover {
			&::before {
				opacity: 0.7;
				transition: opacity 0.2s ease-in-out;
			}
		}

		&::before {
			position: absolute;
			top: 0;
			content: '';
			display: block;
			width: 100%;
			height: 100%;
			background-repeat: no-repeat;
			background-size: cover;
			background-position: center;
			background-image: var(--image);
			border-radius: 20px;
			opacity: 0.4;
		}
	}
	a {
		text-decoration: none;
	}
</style>
