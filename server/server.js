const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const connectDB = require('./config/connectDB')
const app = express()
require('colors')

dotenv.config()

connectDB()

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

// Router
app.use('/api/v1/expense-type', require('./controllers/expenseType'))






const PORT = 8080 || process.env.PORT

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})


