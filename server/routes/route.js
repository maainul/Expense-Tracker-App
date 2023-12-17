const express = require('express')
const createExpType = require('../controllers/expenseType')
const { createExpense, getAllExpense, updateExpense, deleteExpense, getExpenseById } = require('../controllers/expense')

const router = express.Router()

// EXPENSE TYPE
router.post('/expense-type/create', createExpType)


// EXPENSE 
router.post('/expense/create', createExpense)
router.get('/expense/read/all', getAllExpense)
router.get('/expense/read/:id', getExpenseById)
router.put('/expense/update/:id', updateExpense)
router.delete('/expense/delete/:id', deleteExpense)



module.exports = router
