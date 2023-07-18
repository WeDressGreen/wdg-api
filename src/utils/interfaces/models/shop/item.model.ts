export interface IShopItem {
	id: number;
	label: string;
	coins: number;
	buySolo: boolean;
	limit?: number;
}