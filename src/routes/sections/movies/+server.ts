import type { RequestHandler } from '@sveltejs/kit';
import type { MovieDB } from './types';

export const POST: RequestHandler = async ({ request, locals }) => {
	const data = await request.json();

	const movieToStore: MovieDB = data;
	try {
		await locals.supabase.from('Movie').insert([movieToStore]);
	} catch (error) {
		throw error;
	}
	return new Response(JSON.stringify({ success: true }), { status: 200 });
};
