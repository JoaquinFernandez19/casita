import { validateUserLogin } from '$lib/api/index.server';

import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	const { password } = await request.json();

	const loggedInUser = validateUserLogin(password);

	if (!loggedInUser) return json({ error: 'Unauthorized' }, { status: 500 });

	return json({ userName: loggedInUser.name }, { status: 201 });
}
