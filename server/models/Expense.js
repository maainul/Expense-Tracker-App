const mongoose = require('mongoose')


const expenseSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: [true, 'Amount is required'],
    },
    date: {
        type: Date,
        required: [true, 'Date is required']
    },
    description: {
        type: String,
    },
    category: {
        type: String,
        enum: ['credit', 'debit'],
        required: true
    },
    expenseType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ExpenseType',
        required: true,
    },

}, { timeseries: true })

module.exports = mongoose.model('Expense', expenseSchema)
