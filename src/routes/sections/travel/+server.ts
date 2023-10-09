import { formatISO } from 'date-fns';
import { WalletGetRequestTypes, type ISupabase } from '$lib/types/requests.ts';

const WALLET_ID = 1;

export async function GET({ url, locals: { supabase } }) {
	const type = url.searchParams.get('type');

	let data;

	if (type === WalletGetRequestTypes.Total) data = await getTravelWalletTotal(supabase);

	if (type === WalletGetRequestTypes.History) data = await getTravelWalletHistory(supabase);

	return new Response(JSON.stringify(data), { status: 200 });
}

const getTravelWalletTotal = async (supabase: ISupabase) => {
	return await supabase.from('TravelWallet').select().eq('id', WALLET_ID);
};

const getTravelWalletHistory = async (supabase: ISupabase) => {
	return await supabase
		.from('TravelWalletModification')
		.select(
			`
		*,
		user("*")
	`
		)
		.eq('travelWallet', WALLET_ID);
};

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
