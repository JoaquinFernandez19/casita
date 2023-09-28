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
			title: 'Viajes',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
			img: '/travel.png',
			path: '/sections/avionsitogofium'
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
		margin-top: 50px;
	}
	.badge {
		cursor: pointer;
		border-radius: 20px;
		border: 2px solid var(--contrast-color);
		height: 100px;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: border 0.1s ease-in-out;
		& > p {
			z-index: 1;
			color: var(--contrast-color);
			font-weight: bolder;
			padding-left: 30px;
			font-size: 45px;

			@media (max-width: 748px) {
				font-weight: bold;
				font-size: 35px;
			}
		}

		&:hover {
			border: 2px solid transparent;
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
