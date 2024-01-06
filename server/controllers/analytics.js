import ExpenseModel from "../models/Expense.js";

import { serv } from "../service/expense.js";
import { logger } from '../middleware/logMiddleware.js'
import { dateUtils } from "../utils/dateUtils.js";

// Get Current Day Expense
const getDailyExpense = async (req, res) => {
    try {
        const dateStr = dateUtils.dateToString(new Date())
        const dailyexp = await ExpenseModel.find({ date: dateStr })
        logger.info(`Get Daily Expenses data ==> \n ${dailyexp}`);

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
        const dateRange = dateUtils.getCurrentWeeKRange()
        const curWeekexp = await serv.getCurrentWeekExpService(dateRange.startWeekTimestamp, dateRange.endWeekTimestamp)
        logger.info(`Get Daily Expenses data ==> \n ${curWeekexp}`);
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
        logger.info(`Get Daily Expenses data ==> \n ${expThisMonth}`);
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
        logger.info(`Get Daily Expenses data ==> \n ${curYearExp}`);

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
        const dateStr = dateUtils.dateToString(new Date())
        const dailyexp = await find({ date: dateStr })
        logger.info(`Get Daily Expenses data ==> \n ${dailyexp}`);

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
        logger.info(`Get Categorywise Expenses data ==> \n ${catExp}`);

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
        const dateStr = dateUtils.dateToString(new Date())
        const dailyexp = await find({ date: dateStr })
        logger.info(`Get Daily Expenses data ==> \n ${dailyexp}`);

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

const getAllDataExpTypeWise = async (req, res) => {
    try {
        const result = await serv.getExpTypeWiseService()
        logger.info(`Get Expense Type Wise Expense Data ===> ${result}`)
        return res.status(200).send({
            success: true,
            message: 'Get all expense type successfully',
            data: result
        })
    } catch (error) {
        logger.info(`Error in Get Expenes Type Wise Data`, error);
        const status = error.status || 500
        return res.status(status).send({
            success: false,
            message: 'Error In Get Expense Type Wise Data',
            error: error.message || error
        })
    }
}


export const anaCtrl = {
    getTop10Expense,
    getDailyExpense,
    getCurrentyearExpense,
    getCurrentWeekExpense,
    getAllExpenseWeekly,
    getLast20Expense,
    getAllCreditAndDebit,
    getCurrentMonthExpense,
    getExpenseWithParameter,
    getAllDataExpTypeWise
}
