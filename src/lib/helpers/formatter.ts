import type { HistoryRegister, HistoryRegisterDB } from '../types/wallet_history';
function formatMoney(number: number) {
	return '$' + number.toLocaleString('en-US');
}

function walletRegisterDTO(register: HistoryRegisterDB): HistoryRegister {
	const { amount, created_at, prevAmount, user } = register;
	return {
		amount,
		date: created_at,
		prevAmount,
		user
	};
}

export { formatMoney, walletRegisterDTO };
