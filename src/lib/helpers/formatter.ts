import type { HistoryRegister, HistoryRegisterDB } from '../types/wallet_history';
function formatMoney(number: number) {
	if (!number) return '$' + 0;
	return '$' + number.toLocaleString('en-US');
}

function walletRegisterDTO(register: HistoryRegisterDB): HistoryRegister {
	const {
		amount,
		created_at,
		prevAmount,
		user: { name, id }
	} = register;
	return {
		amount,
		date: created_at,
		prevAmount,
		userName: name,
		user: id
	};
}

export { formatMoney, walletRegisterDTO };
