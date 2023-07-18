import { IShopItem } from "../utils/interfaces/models/shop/item.model";
import DatabaseUtil from "../utils/database.util";
import { IQueryReturn } from "../utils/interfaces/queryreturn.interface";
import { IShopCoupon } from "../utils/interfaces/models/shop/coupon.model";
import { IShopPurchase } from "../utils/interfaces/models/shop/purchase.model";
import { IShopPack } from "../utils/interfaces/models/shop/pack.model";

export default class ShopService {

    static async getAllItems(): Promise<IQueryReturn<IShopItem[]>> {
        return await DatabaseUtil.queryF<IShopItem[]>("f_get_shop_items", [], 'shopItems');
    }

    static async getAllPacks(): Promise<IQueryReturn<IShopPack[]>> {
        return await DatabaseUtil.queryF<IShopPack[]>("f_get_shop_packs", [], 'shopPacks');
    }

    static async getAllPurchases(): Promise<IQueryReturn<IShopPurchase[]>> {
        return await DatabaseUtil.queryF<IShopPurchase[]>("f_get_shop_purchases", [], 'shopPurchases');
    }

    static async getAllPurchasesByMember(options: { memberId: string; }): Promise<IQueryReturn<IShopPurchase[]>> {
        return await DatabaseUtil.queryF<IShopPurchase[]>("f_get_shop_purchases_by_member", [options.memberId], 'shopPurchases');
    }

    static async getAllCoupons(): Promise<IQueryReturn<IShopCoupon[]>> {
        return await DatabaseUtil.queryF<IShopCoupon[]>("f_get_shop_coupons", [], 'coupons');
    }

    static async getBasket(options: { memberId: string; }): Promise<IQueryReturn<IShopItem[]>> {
        return await DatabaseUtil.queryF<IShopItem[]>("f_get_basket_items", [options.memberId], 'basketItems');
    }



    static async getItem(options: { id: string; }): Promise<IQueryReturn<IShopItem>> {
        return await DatabaseUtil.queryF<IShopItem>("f_get_shop_item", [options.id], 'shopItem');
    }

    static async getPack(options: { id: string; }): Promise<IQueryReturn<IShopPack>> {
        return await DatabaseUtil.queryF<IShopPack>("f_get_shop_item", [options.id], 'shopPack');
    }

    static async getPurchase(options: { id: string; }): Promise<IQueryReturn<IShopPurchase>> {
        return await DatabaseUtil.queryF<IShopPurchase>("f_get_shop_item", [options.id], 'shopPurchase');
    }

    static async getCoupon(options: { id: string; }): Promise<IQueryReturn<IShopCoupon>> {
        return await DatabaseUtil.queryF<IShopCoupon>("f_get_shop_item", [options.id], 'shopCoupon');
    }
};