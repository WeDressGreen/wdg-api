import { IShopItem } from "./item.model";

export interface IShopPack {
	id: number;
	label: string;
	coins: number;
	items: IShopItem[];
}