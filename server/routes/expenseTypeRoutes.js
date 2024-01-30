import { Router } from "express";
import { controller } from "../controllers/controller.js";
import { authMiddleware } from './../middleware/authMiddleware.js';

const router = Router()


// EXPENSE TYPE
router.post('/create', controller.expenseTypeCtrl.createExpTypeCtrl)
router.get('/read/all', controller.expenseTypeCtrl.getAllExpTypeCtrl)
router.get('/read/:id', controller.expenseTypeCtrl.getExpTypeByIdCtrl)
router.put('/update/:id', authMiddleware, controller.expenseTypeCtrl.updateExpTypeCtrl)
router.delete('/delete/:id', authMiddleware, controller.expenseTypeCtrl.deleteExpenseTypeCtrl)

export default router