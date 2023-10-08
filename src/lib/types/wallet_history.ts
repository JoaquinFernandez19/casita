export type HistoryRegister = {
	user: string;
	amount: number;
	prevAmount: number;
	date: string;
};

export type HistoryRegisterDB = {
	user: string;
	created_at: string;
	amount: number;
	prevAmount: number;
};
