import { IMember } from "../member.model";
import { IShopCoupon } from "./coupon.model";
import { IShopItem } from "./item.model";

export interface IShopPurchase {
	id: string;
	member: IMember;
	coupon?: IShopCoupon;
	items: IShopItem[];
}