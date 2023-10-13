import { redirect } from '@sveltejs/kit';

export const load = async ({ locals, route }) => {
	const session = await locals.getSession();

	if (!session && route.id != '/login') {
		throw redirect(303, '/login');
	}

	return {
		session
	};
};
