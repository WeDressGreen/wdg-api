import { Router, Request, Response, NextFunction } from "express";
import ResponsesUtil from "../utils/responses.util";

const router: Router = Router();



/***************************************************************
* NOT ALLOWED METHODS HANDLING
***************************************************************/

router.all('/', async (req: Request, res: Response, next: NextFunction): Promise<void> => ResponsesUtil.methodNotAllowed(res));
router.all('/register', async (req: Request, res: Response, next: NextFunction): Promise<void> => ResponsesUtil.methodNotAllowed(res));
router.all('/login', async (req: Request, res: Response, next: NextFunction): Promise<void> => ResponsesUtil.methodNotAllowed(res));
router.all('/logout', async (req: Request, res: Response, next: NextFunction): Promise<void> => ResponsesUtil.methodNotAllowed(res));

/**************************************************************/

export default router;