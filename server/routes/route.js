const express = require('express')
const { expCtrl } = require('../controllers/expense')
const { exTypCtrl } = require('../controllers/expenseType')
const { anaCtrl } = require('../controllers/analytics')
const { subCtrl } = require('../controllers/subscribeUser')
const { usrCtrl } = require('../controllers/user')

const {
    createAboutUs,
    updateaboutUs
} = require('../controllers/about')
const { authServ } = require('../controllers/auth')
const { requireSignIn } = require('../middleware/authMiddleware')



const router = express.Router()

// EXPENSE TYPE
router.post('/expense-type/create', requireSignIn, exTypCtrl.createExpType)
router.post('/expense-type/read/all', requireSignIn, exTypCtrl.getAllExpType)
router.get('/expense-type/read/', requireSignIn, exTypCtrl.getExpTypeById)


// EXPENSE 
router.post('/expense/create', requireSignIn, expCtrl.createExpense)
router.post('/expense/read/all', requireSignIn, expCtrl.getAllExpense)
router.get('/expense/read/:id', requireSignIn, expCtrl.getExpenseById)
router.put('/expense/update/:id', requireSignIn, expCtrl.updateExpense)
router.delete('/expense/delete/:id', requireSignIn, expCtrl.deleteExpense)

// USER SUBSCRIPTION
router.post('/user/subscribe', subCtrl.subscribeUser)
router.post('/user/verify', subCtrl.verifyUser)
router.post('/user/unsubscribe', subCtrl.unSubscribeUser)

// ABOUT PAGE OF SITE
router.get('/about', requireSignIn, createAboutUs)
router.get('/about/:id', requireSignIn, updateaboutUs)


// USER
router.put('/user/update/:id', requireSignIn, usrCtrl.updateUser)
router.get('/user/list', requireSignIn, usrCtrl.listUser)
router.get('/user/userinfo/:id', requireSignIn, usrCtrl.getUserInfo)

// AUTH
router.post('/auth/signin', authServ.signin)
router.post('/auth/signup', authServ.signup)

// ANALYTICS

// GET | Daily Expense List 
router.get('/analytics/daily-expense', requireSignIn, anaCtrl.getDailyExpense)

// GET | Top 10 Expense List 
router.get('/analytics/top-10-expense', requireSignIn, anaCtrl.getTop10Expense)

// Get  | Current Expense Weekly From Saturday to Friday
router.get('/analytics/current-week-expense', requireSignIn, anaCtrl.getCurrentWeekExpense)

// Get | Current Month Expense
router.get('/analytics/current-month-expense', requireSignIn, anaCtrl.getCurrentMonthExpense)

// GET | Current Year Expense
router.get('/analytics/current-year-expense', requireSignIn, anaCtrl.getCurrentyearExpense)

// GET | Last 20 Expense
router.get('/analytics/last-20-expense', requireSignIn, anaCtrl.getLast20Expense)

// GET | GET Category Wise Expense
router.get('/analytics/credit-debit-expense', requireSignIn, anaCtrl.getAllCreditAndDebit)

// GET | GET Category Wise Expense
router.get('/analytics/expense-type-wise', requireSignIn, anaCtrl.getAllDataExpTypeWise)


module.exports = router
