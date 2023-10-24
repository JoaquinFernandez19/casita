import type { Database } from '$lib/types/DatabaseDefinitions';

interface IMovie {
	name: string;
	image: string;
	status: 'Vista' | 'Pendiente' | 'Cancelada';
	rating: number;
	user: string;
	ext_id: number;
}

type MovieDB = Omit<Database['public']['Tables']['Movie']['Row'], 'id'>;

interface IApiMovie {
	Title: string;
	Year: number;
	Genre: string;
	Poster: string;
	imdbID: string;
}

export type { IMovie, IApiMovie, MovieDB };
