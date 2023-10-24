import type { RequestHandler } from '@sveltejs/kit';
import { OMDB_API_KEY } from '$env/static/private';

export const GET: RequestHandler = async ({ url }) => {
	const keyword = url.searchParams.get('keyword');
	const searchUrl = `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&t=${keyword}`;

	const apiResponse = await fetch(searchUrl, {
		method: 'GET'
	});

	const movieData = await apiResponse.json();

	return new Response(JSON.stringify(movieData), { status: 200 });
};
