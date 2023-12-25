const express = require('express')
const {
    createExpense,
    getAllExpense,
    updateExpense,
    deleteExpense,
    getExpenseById,
} = require('../controllers/expense')
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
router.post('/expense/create', createExpense)
router.post('/expense/read/all', getAllExpense)
router.get('/expense/read/:id', getExpenseById)
router.put('/expense/update/:id', updateExpense)
router.delete('/expense/delete/:id', deleteExpense)

// USER SUBSCRIPTION
router.post('/user/subscribe', subscribeUser)
router.post('/user/verify', verifyUser)
router.post('/user/unsubscribe', unSubscribeUser)


// ABOUT PAGE OF SITE
router.get('/about', createAboutUs)
router.get('/about/:id', updateaboutUs)


// USER
router.post('/user/create', createUser)
router.put('/user/update/:id', updateUser)

module.exports = router
