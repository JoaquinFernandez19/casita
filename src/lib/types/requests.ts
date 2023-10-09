export type ISupabase = App.Locals['supabase'];

export type WalletGetRequestType = 'total' | 'history';

export enum WalletGetRequestTypes {
	Total = 'total',
	History = 'history'
}
