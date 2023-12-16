const expense = require('express')
const createExpType = require('../controllers/expenseType')

const router = express.router()


// CREATE POST || POST
router.post('/create', createExpType)
