const mongoose = require('mongoose')
require('colors')

const connectDB = async () => {
    try {
        console.log("Trying to Connect Mongo DB ....".bgYellow.bold)
        // CONNECTION_STRING =  mongodb://127.0.0.1:27017/EXPENSEBD
        await mongoose.connect(process.env.CONNECTION_STRING)
        console.log(`Database Connected Successfully`.bgGreen.bold)
        console.log(`Server Running on Host = ${mongoose.connection.host}`.random.bold)
    } catch (error) {
        console.log(`MongoDB Error ${error.message}`.bgRed)

    }
}

module.exports = connectDB
