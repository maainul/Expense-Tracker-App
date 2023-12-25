const express = require('express')

const {
    subscribeUser,
    unSubscribeUser,
    verifyUser
} = require('../controllers/subscribeUser')

const { anaCtrl } = require('../controllers/analytics')
const { exTypCtrl } = require('../controllers/expenseType')
const { expCtrl } = require('../controllers/expense')
const { subCtrl } = require('../controllers/subscribeUser')

const {
    subscribeUser,
    unSubscribeUser,
    verifyUser
} = require('../controllers/subscribeUser')
const {
    createAboutUs,
    updateaboutUs
} = require('../controllers/about')

const {
    updateUser,
    createUser
} = require('../controllers/user')

const expTypCtrl = require('../controllers/expenseType')



const router = express.Router()

// EXPENSE TYPE
router.post('/expense-type/create', expTypCtrl.createExpType)
router.post('/expense-type/read/all', expTypCtrl.getAllExpType)


// EXPENSE 
router.post('/expense/create', expCtrl.createExpense)
router.post('/expense/read/all', expCtrl.getAllExpense)
router.get('/expense/read/:id', expCtrl.getExpenseById)
router.put('/expense/update/:id', expCtrl.updateExpense)
router.delete('/expense/delete/:id', expCtrl.deleteExpense)

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
router.get('/about', createAboutUs)
router.get('/about/:id', updateaboutUs)


// USER
router.post('/user/create', createUser)
router.put('/user/update/:id', updateUser)


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


module.exports = router
