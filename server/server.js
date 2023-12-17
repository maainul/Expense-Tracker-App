const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const connectDB = require('./config/connectDB')

require('colors')

dotenv.config()

connectDB()

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

// Router
app.use('/api/v1', require('./routes/route'))


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});