const MValidator = require('../validator/MValidator')
const ExpenseModel = require('../models/Expense')
const validationLog = require('../utils/validationLog')
const save = require('../utils/saveUtils')
const {
    dateToString,
    dateToTimestamp

} = require('../utils/dateUtils');
const { serv } = require('../service/expense');



// validation Rules
const validationRules = {
    amount: {
        type: 'number',
        required: [true, 'Amount is required'],
    },
    date: {
        type: 'string',
        required: [true, 'Date is required']
    },
    description: {
        type: 'string',
    },
    category: {
        type: 'string',
        enum: ['credit', 'debit'],
        required: true
    },
    expenseType: {
        type: 'string',
        ref: 'ExpenseType',
        required: true,
    },
}


const createExpense = async (req, res) => {
    try {
        const { amount, date, description, category, expenseType } = req.body

        console.log(`Request data ==> \n ${JSON.stringify(req.body)}`)
        const formattedDate = dateToString(new Date())
        const date_sl = dateToTimestamp(new Date())

        const validationResut = await MValidator(req.body, validationRules, ExpenseModel)

        validationLog(validationResut)

        if (!validationResut.isValid) {
            return res.status(400).send({
                success: false,
                message: 'Validation Failed',
                errors: validationResut.errors
            })
        }
        const expense = await save(ExpenseModel, { amount, date: formattedDate, date_sl, description, category, expenseType })
        console.log(`Expense Type Added Successfully :\n ${expense}`)

        return res.status(201).send({
            success: true,
            message: 'Expense Added Successfully',
            data: expense
        })

    } catch (error) {
        console.error('Error In Create Expense API:', error)
        const status = error.status || 500
        return res.status(status).send({
            success: false,
            message: 'Error In Create Expense API',
            error: error.message || error,
        })
    }
}

const updateExpense = async (req, res) => {
    try {
        const { id } = req.params.id
        const { amount, date, description, category, expenseType } = req.body
        console.log(`Request data ==> \n ${JSON.stringify(req.body, null, 2)}`);

        const expense = await findById(id)
        console.log(`Get expense By Id : \n ${expense}`)
        if (!expense) {
            return res.status(404).send({
                success: false,
                message: 'Expense not found',
            });
        }
        // Update req.body with existing data
        req.body = {
            amount: amount || expense?.amount,
            date: date || expense?.date,
            description: description || expense?.description,
            category: category || expense?.category,
            expenseType: expenseType || expense?.expense
        }

        const validationResult = await MValidator(req, validationRules, ExpenseModel)
        validationLog(validationResult)

        if (!validationResult.isValid) {
            return res.status(400).send({
                success: false,
                message: 'Validation Failed',
                errors: validationResult.errors

            })
        }

        const updatedExp = await ExpenseModel.findByIdAndUpdate(id, { $set: req.body }, { new: true })
        console.log(`Expense updated successfully :\n ${updatedExp}`)

        return res.status(200).send({
            success: true,
            message: 'Your Expense has been updated',
            data: updatedExp
        })

    } catch (error) {
        console.error('Error In Update Expense API:', error)
        const status = error.status || 500

        return res.status(status).send({
            success: false,
            message: 'Error In Update Expense API',
            error: error.message || error,
        })
    }
}

const deleteExpense = async (req, res) => {
    try {
        const { id } = req.params;
        await ExpenseModel.findByIdAndDelete(id);
        return res.status(200).send({
            success: true,
            message: 'Your Expense has been successfully Deleted',
        });
    } catch (error) {
        console.error('Error In Delete Expense API:', error);
        const status = error.status || 500;
        return res.status(status).send({
            success: false,
            message: 'Error In Delete Expense API',
            error: error.message || error,
        });
    }
};

// GET ALL expenses with Custom Parameters
const getAllExpense = async (req, res) => {
    try {
        const { sortOrder, category, expenseType, yearFilter, monthFilter } = req.body
        const expenses = await serv.getCustExpService(category, sortOrder, expenseType, yearFilter, monthFilter)
        console.log(`Expenses data ==> \n ${expenses}`);

        return res.status(200).send({
            success: true,
            message: 'Get all expense successfully',
            data: expenses
        })
    } catch (error) {
        console.error('Error In Get Expense API:', error)
        const status = error.status || 500

        return res.status(status).send({
            success: false,
            message: 'Error In get all expense',
            error: error.message || error,
        })
    }
}

const getExpenseById = async (req, res) => {
    try {
        const { Id } = req.params

        const expense = await ExpenseModel.findById(Id)
        if (!expense) {
            return res.status(404).send({
                success: false,
                message: ' Expense not found',
                data: expense
            })
        }
        console.log(`Expenses data By Id==> \n ${expense}`);

        return res.status(200).send({
            success: true,
            message: 'Expense Found',
            data: expense
        })
    } catch (error) {
        console.error('Error In Get Expense', error)
        const status = error.status || 500

        return res.status(status).send({
            success: false,
            message: 'Error In Get Expense',
            error: error.message || error,
        })
    }
}

const expCtrl = {
    createExpense,
    updateExpense,
    deleteExpense,
    getAllExpense,
    getExpenseById
}

module.exports = { expCtrl }