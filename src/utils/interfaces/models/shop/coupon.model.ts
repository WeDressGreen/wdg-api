import { IShopItem } from "./item.model";

export interface IShopCoupon {
	id: number;
	label: string;
	percent: number;
	global: boolean;
	items?: IShopItem[];
}