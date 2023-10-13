import { WALLET_ID } from '$lib/contansts';
import { walletRegisterDTO } from '$lib/helpers/formatter';
import type { HistoryRegisterDB } from '$lib/types/wallet_history';
import type { PageServerLoad } from '../../login/$types';

export const load: PageServerLoad = async ({ locals: { supabase } }) => {
	const { data: total } = await supabase.from('TravelWallet').select().eq('id', WALLET_ID);

	const { data: history } = await supabase
		.from('TravelWalletModification')
		.select(
			`
		*,
		user("*")
	`
		)
		.eq('travelWallet', WALLET_ID);

	return {
		walletTotal: total?.length ? (total[0].amount as number) : (0 as number),
		walletHistory: history
			?.map((registerDB) => {
				return walletRegisterDTO(registerDB as unknown as HistoryRegisterDB);
			})
			.reverse()
	};
};
