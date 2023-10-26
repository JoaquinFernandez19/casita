import type { Database } from '$lib/types/DatabaseDefinitions';

type MovieDB = Omit<Database['public']['Tables']['Movie']['Row'], 'id'>;

type IMovie = MovieDB & { user: { name: string } };
interface IApiMovie {
	Title: string;
	Year: number;
	Genre: string;
	Poster: string;
	imdbID: string;
}

export type { IMovie, IApiMovie, MovieDB };
