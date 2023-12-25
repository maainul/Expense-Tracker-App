const ExpenseModel = require("../models/Expense");

const { serv } = require("../service/expense");

const {
    getCurrentWeeKRange,
    dateToString
} = require("../utils/dateUtils");

// Get Current Day Expense
const getDailyExpense = async (req, res) => {
    try {
        const dateStr = dateToString(new Date())
        const dailyexp = await ExpenseModel.find({ date: dateStr })
        console.log(`Get Daily Expenses data ==> \n ${dailyexp}`);

        return res.status(200).send({
            success: true,
            message: 'Get all expense successfully',
            data: dailyexp
        })
    } catch (error) {
        console.error('Error In Get Expense API', error);
        const status = error.status || 500;
        return res.status(status).send({
            success: false,
            message: 'Error In Get Expense API',
            error: error.message || error,
        });
    }
}

// Get Current Expense Weekly From Saturday to Friday
const getCurrentWeekExpense = async (req, res) => {
    try {
        const dateRange = getCurrentWeeKRange()
        const curWeekexp = await serv.getCurrentWeekExpService(dateRange.startWeekTimestamp, dateRange.endWeekTimestamp)
        console.log(`Get Daily Expenses data ==> \n ${curWeekexp}`);
        return res.status(200).send({
            success: true,
            message: 'Get all expense successfully',
            data: {
                startWeek: dateRange.startWeek,
                endWeek: dateRange.endWeek,
                startWeekTimestamp: dateRange.startWeekTimestamp,
                endWeekTimestamp: dateRange.startWeekTimestamp,
                expenses: curWeekexp
            }
        })
    } catch (error) {
        console.error('Error In Get Expense API', error);
        const status = error.status || 500;
        return res.status(status).send({
            success: false,
            message: 'Error In Get Expense API',
            error: error.message || error,
        });
    }
}

// Get Current Month Expense
const getCurrentMonthExpense = async (req, res) => {
    try {
        const expThisMonth = await serv.getCurMonthExpService();
        console.log(`Get Daily Expenses data ==> \n ${expThisMonth}`);
        return res.status(200).send({
            success: true,
            message: 'Get all expense successfully',
            data: expThisMonth
        })
    } catch (error) {
        console.error('Error In Get Expense API', error);
        const status = error.status || 500;
        return res.status(status).send({
            success: false,
            message: 'Error In Get Expense API',
            error: error.message || error,
        });
    }
}
// Get Top 10 Expenses 
const getTop10Expense = async (req, res) => {
    try {
        const top10Expenses = await serv.getTopExpService(10)
        return res.status(200).send({
            success: true,
            message: 'Get all expense successfully',
            data: top10Expenses
        })
    } catch (error) {
        console.error('Error In Get Expense API', error);
        const status = error.status || 500;
        return res.status(status).send({
            success: false,
            message: 'Error In Get Expense API',
            error: error.message || error,
        });
    }
}

// Get Top 20 Expenses 
const getLast20Expense = async (req, res) => {
    try {
        const top10Expenses = await serv.getLastExpService(-1, 20)
        return res.status(200).send({
            success: true,
            message: 'Get all expense successfully',
            data: top10Expenses
        })
    } catch (error) {
        console.error('Error In Get Expense API', error);
        const status = error.status || 500;
        return res.status(status).send({
            success: false,
            message: 'Error In Get Expense API',
            error: error.message || error,
        });
    }
}



// Get Current Year Expense
const getCurrentyearExpense = async (req, res) => {
    try {

        const curYearExp = await serv.getCurYearExp(-1)
        console.log(`Get Daily Expenses data ==> \n ${curYearExp}`);

        return res.status(200).send({
            success: true,
            message: 'Get all expense successfully',
            data: curYearExp
        })
    } catch (error) {
        console.error('Error In Get Expense API', error);
        const status = error.status || 500;
        return res.status(status).send({
            success: false,
            message: 'Error In Get Expense API',
            error: error.message || error,
        });
    }
}

const getAllExpenseWeekly = async (req, res) => {
    try {
        const dateStr = dateToString(new Date())
        const dailyexp = await ExpenseModel.find({ date: dateStr })
        console.log(`Get Daily Expenses data ==> \n ${dailyexp}`);

        return res.status(200).send({
            success: true,
            message: 'Get all expense successfully',
            data: dailyexp
        })
    } catch (error) {
        console.error('Error In Get Expense API', error);
        const status = error.status || 500;
        return res.status(status).send({
            success: false,
            message: 'Error In Get Expense API',
            error: error.message || error,
        });
    }
}

// GET Categorywise Expenses
const getAllCreditAndDebit = async (req, res) => {
    try {
        const catExp = await serv.getCatWiseExpService()
        console.log(`Get Categorywise Expenses data ==> \n ${catExp}`);

        return res.status(200).send({
            success: true,
            message: 'Get all expense successfully',
            data: catExp
        })
    } catch (error) {
        console.error('Error In Get Expense API', error);
        const status = error.status || 500;
        return res.status(status).send({
            success: false,
            message: 'Error In Get Expense API',
            error: error.message || error,
        });
    }
}


const getExpenseWithParameter = async (req, res) => {
    try {
        const dateStr = dateToString(new Date())
        const dailyexp = await ExpenseModel.find({ date: dateStr })
        console.log(`Get Daily Expenses data ==> \n ${dailyexp}`);

        return res.status(200).send({
            success: true,
            message: 'Get all expense successfully',
            data: dailyexp
        })
    } catch (error) {
        console.error('Error In Get Expense API', error);
        const status = error.status || 500;
        return res.status(status).send({
            success: false,
            message: 'Error In Get Expense API',
            error: error.message || error,
        });
    }
}

const anaCtrl = {
    getTop10Expense,
    getDailyExpense,
    getCurrentyearExpense,
    getCurrentWeekExpense,
    getAllExpenseWeekly,
    getLast20Expense,
    getAllCreditAndDebit,
    getCurrentMonthExpense,
    getExpenseWithParameter,
}


module.exports = { anaCtrl }