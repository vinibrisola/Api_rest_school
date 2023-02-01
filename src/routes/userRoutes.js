import { Router } from "express";
import userControllers from "../controllers/UserControllers";

const router = new Router();

router.post('/',userControllers.store);

export default router;
