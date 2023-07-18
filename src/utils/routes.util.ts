import { Express } from "express";
import AuthenticatorRouter from "../routes/authenticator.route";
import ShopRouter from "../routes/shop.route";

export default class RouterUtil {
    static init(app: Express): void {
		const version = app.get('version');

		app.use('/' + version + '/auth', AuthenticatorRouter);
		app.use('/' + version + '/shop', ShopRouter);
    }
};