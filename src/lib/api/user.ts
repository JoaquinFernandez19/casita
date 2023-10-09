import type { ISupabase } from '$lib/types/requests';

export const getUserInfoWithEmail = async ({ email }: { email: string }, supabase: ISupabase) => {
	const user = await supabase.from('Users').select('name, id').eq('email', email);

	return user.data && user.data[0];
};
