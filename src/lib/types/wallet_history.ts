export type HistoryRegister = {
	userName: string;
	user: number;
	amount: number;
	prevAmount: number;
	date: string;
};

export type HistoryRegisterDB = {
	user: {
		name: string;
		id: number;
	};
	created_at: string;
	amount: number;
	prevAmount: number;
};
