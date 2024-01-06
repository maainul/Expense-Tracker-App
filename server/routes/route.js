import { Router } from 'express'
import { expCtrl } from '../controllers/expense.js'
import { exTypCtrl } from '../controllers/expenseType.js'
import { anaCtrl } from '../controllers/analytics.js'
import { subCtrl } from '../controllers/subscribeUser.js'
import { usrCtrl } from '../controllers/user.js'
import { authServ } from '../controllers/auth.js'
import { requireSignIn } from './../middleware/authMiddleware.js';


const router = Router()

// EXPENSE TYPE
router.post('/expense-type/create', exTypCtrl.createExpType)
router.post('/expense-type/read/all', exTypCtrl.getAllExpType)
router.get('/expense-type/read/', exTypCtrl.getExpTypeById)


// EXPENSE 
router.post('/expense/create', expCtrl.createExpense)
router.post('/expense/read/all', expCtrl.getAllExpense)
router.get('/expense/read/:id', expCtrl.getExpenseById)
router.put('/expense/update/:id', expCtrl.updateExpense)
router.delete('/expense/delete/:id', expCtrl.deleteExpense)

// USER SUBSCRIPTION
router.post('/user/subscribe', subCtrl.subscribeUser)
router.post('/user/verify', subCtrl.verifyUser)
router.post('/user/unsubscribe', subCtrl.unSubscribeUser)

// ABOUT PAGE OF SITE
// router.get('/about', requireSignIn, createAboutUs)
// router.get('/about/:id', requireSignIn, updateaboutUs)


// USER
router.put('/user/update/:id', usrCtrl.updateUser)
router.get('/user/list', usrCtrl.listUser)
router.get('/user/info', usrCtrl.getUserInfo)

// AUTH
router.post('/auth/signin', authServ.signin)
router.post('/auth/signup', authServ.signup)

// PROTECTED ROUTES : (PRIVATE ROUTE CONFIRM)
router.get('/auth/user-auth', requireSignIn, (req, res) => {
    res.status(200).send({ ok: true })
})


// ANALYTICS

// GET | Daily Expense List 
router.get('/analytics/daily-expense', anaCtrl.getDailyExpense)

// GET | Top 10 Expense List 
router.get('/analytics/top-10-expense', anaCtrl.getTop10Expense)

// Get  | Current Expense Weekly From Saturday to Friday
router.get('/analytics/current-week-expense', anaCtrl.getCurrentWeekExpense)

// Get | Current Month Expense
router.get('/analytics/current-month-expense', anaCtrl.getCurrentMonthExpense)

// GET | Current Year Expense
router.get('/analytics/current-year-expense', anaCtrl.getCurrentyearExpense)

// GET | Last 20 Expense
router.get('/analytics/last-20-expense', anaCtrl.getLast20Expense)

// GET | GET Category Wise Expense
router.get('/analytics/credit-debit-expense', anaCtrl.getAllCreditAndDebit)

// GET | GET Category Wise Expense
router.get('/analytics/expense-type-wise', anaCtrl.getAllDataExpTypeWise)


export default router
