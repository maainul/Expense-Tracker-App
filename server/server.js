const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const connectDB = require('./config/connectDB')
const cookieParser = require('cookie-parser')
require('colors')

dotenv.config()

connectDB()

const app = express()

const corsOptions = {
    origin: 'http://localhost:3000', // Replace with your frontend domain
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Enable credentials (cookies)
    optionsSuccessStatus: 204, // For preflight requests
};

app.use(cors(corsOptions))
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser());

// Router
app.use('/api/v1', require('./routes/route'))


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
