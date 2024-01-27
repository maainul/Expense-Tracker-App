import { Router } from "express";
import { controller } from "../controllers/controller.js";

const router = Router()


// EXPENSE TYPE
router.post('/create', controller.expenseTypeCtrl.createExpTypeCtrl)
router.get('/read/all', controller.expenseTypeCtrl.getAllExpTypeCtrl)
router.get('/read/', controller.expenseTypeCtrl.getExpTypeByIdCtrl)


export default router