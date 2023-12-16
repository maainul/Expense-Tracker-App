const mongoose = require('mongoose')

const expenseTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "Title is Required"],
        maxlength: [50, 'Title can not be longer than 50 character long'],
        minlength: [3, 'Title can not be less than 3 characters long']
    },
    icon: {
        type: String,
        require: [true, "Icon is Required"],
    }
}, { timestamps: true })

module.exports = mongoose.model('ExpenseType', expenseTypeSchema)
