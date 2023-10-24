import { WALLET_ID } from '$lib/contansts';
import { formatISO } from 'date-fns';

export async function POST({ request, locals: { supabase } }) {
	const { amount, prevAmount, user, date } = await request.json();
	await supabase
		.from('TravelWallet')
		.update({
			amount: prevAmount + amount
		})
		.eq('id', WALLET_ID);

	await supabase
		.from('TravelWalletModification')
		.insert([
			{ amount, prevAmount, user, created_at: formatISO(new Date(date)), travelWallet: WALLET_ID }
		]);

	return new Response(JSON.stringify({ success: true }), { status: 200 });
}
