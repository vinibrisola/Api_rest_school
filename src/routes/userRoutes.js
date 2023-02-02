import { Router } from "express";
import userControllers from "../controllers/UserControllers";

const router = new Router();

router.post('/',userControllers.store);
router.get('/',userControllers.index);
router.get('/:id',userControllers.show);
router.put('/:id',userControllers.update);
router.delete('/:id',userControllers.delete);

export default router;
