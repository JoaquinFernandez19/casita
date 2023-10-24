import type { RequestHandler } from '@sveltejs/kit';
import type { MovieDB } from './types';
import { formatISO } from 'date-fns';

export const POST: RequestHandler = async ({ request, locals }) => {
	const { movie_id, status, rating, user } = await request.json();

	const movieToStore: MovieDB = {
		movie_id,
		rating,
		status,
		user
	};

	const res = await locals.supabase.from('Movie').insert([movieToStore]);
	console.log(res);
	return new Response(JSON.stringify({ success: true }), { status: 200 });
};
