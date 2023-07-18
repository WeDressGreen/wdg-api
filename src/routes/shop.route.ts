import { Router, Request, Response, NextFunction } from "express";
import ResponsesUtil from "../utils/responses.util";
import service from "../services/shop.service";

const router: Router = Router();

router.get('/items', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const result = await service.getAllItems();
	ResponsesUtil.handleResult(res, result);
});

router.get('/items/:id', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const result = await service.getItem({id: req.params.id});
	ResponsesUtil.handleResult(res, result);
});

router.get('/packs', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const result = await service.getAllPacks();
	ResponsesUtil.handleResult(res, result);
});

router.get('/packs/:id', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const result = await service.getPack({id: req.params.id});
	ResponsesUtil.handleResult(res, result);
});

router.get('/purchases', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const result = await service.getAllPurchases();
	ResponsesUtil.handleResult(res, result);
});

router.get('/purchases/:id', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const result = await service.getPurchase({id: req.params.id});
	ResponsesUtil.handleResult(res, result);
});

router.get('/purchases/filter/:memberId', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const result = await service.getAllPurchasesByMember({memberId: req.params.memberId});
	ResponsesUtil.handleResult(res, result);
});

router.get('/coupons', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const result = await service.getAllCoupons();
	ResponsesUtil.handleResult(res, result);
});

router.get('/coupons/:id', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const result = await service.getCoupon({id: req.params.id});
	ResponsesUtil.handleResult(res, result);
});

router.get('/basket/:memberId', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const result = await service.getBasket({memberId: req.params.memberId});
	ResponsesUtil.handleResult(res, result);
});

/***************************************************************
* NOT ALLOWED METHODS HANDLING
***************************************************************/

router.all('/items', async (req: Request, res: Response, next: NextFunction): Promise<void> => ResponsesUtil.methodNotAllowed(res));
router.all('/items/:id', async (req: Request, res: Response, next: NextFunction): Promise<void> => ResponsesUtil.methodNotAllowed(res));
router.all('/packs', async (req: Request, res: Response, next: NextFunction): Promise<void> => ResponsesUtil.methodNotAllowed(res));
router.all('/packs/:id', async (req: Request, res: Response, next: NextFunction): Promise<void> => ResponsesUtil.methodNotAllowed(res));
router.all('/purchases', async (req: Request, res: Response, next: NextFunction): Promise<void> => ResponsesUtil.methodNotAllowed(res));
router.all('/purchases/:id', async (req: Request, res: Response, next: NextFunction): Promise<void> => ResponsesUtil.methodNotAllowed(res));
router.all('/purchases/filter/:memberId', async (req: Request, res: Response, next: NextFunction): Promise<void> => ResponsesUtil.methodNotAllowed(res));
router.all('/coupons', async (req: Request, res: Response, next: NextFunction): Promise<void> => ResponsesUtil.methodNotAllowed(res));
router.all('/coupons/:id', async (req: Request, res: Response, next: NextFunction): Promise<void> => ResponsesUtil.methodNotAllowed(res));
router.all('/basket/:memberId', async (req: Request, res: Response, next: NextFunction): Promise<void> => ResponsesUtil.methodNotAllowed(res));

/**************************************************************/

export default router;