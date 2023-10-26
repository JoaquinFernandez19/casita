import type { PageServerLoad } from '../../login/$types';
import type { IMovie } from './types';

export const load: PageServerLoad = async ({ locals: { supabase } }) => {
	const { data: movies } = await supabase.from('Movie').select(
		`
		*,
		user("name")
	`
	);

	return {
		movies: movies?.reverse()
	};
};
