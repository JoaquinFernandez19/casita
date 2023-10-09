// // src/routes/+layout.ts
import { PUBLIC_SUPABASE_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';
import { createSupabaseLoadClient } from '@supabase/auth-helpers-sveltekit';
import type { Database } from '../lib/types/DatabaseDefinitions';
import { getUserInfoWithEmail } from '$lib/api/user.js';

export const load = async ({ fetch, data, depends }) => {
	depends('supabase:auth');

	const supabase = createSupabaseLoadClient<Database>({
		supabaseUrl: PUBLIC_SUPABASE_URL,
		supabaseKey: PUBLIC_SUPABASE_KEY,
		event: { fetch },
		serverSession: data.session
	});

	const {
		data: { session }
	} = await supabase.auth.getSession();

	let userData = null;

	if (session && session.user.email) {
		userData = await getUserInfoWithEmail({ email: session.user.email }, supabase);
	}

	return { supabase, session, userData };
};
