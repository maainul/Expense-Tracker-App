const ExpenseModel = require("../models/Expense");
const { dateToTimestamp, dateUtils } = require("../utils/dateUtils");


// Top 10 Expenses
const getTopExpService = async (limit) => {
    const top10Expenses = await ExpenseModel.aggregate([
        { $sort: { amount: -1 } },
        { $limit: limit },
        {
            $project: {
                amount: 1,
                description: 1,
                category: 1,
                expenseType: 1
            },
        },
        {
            $group: {
                _id: "$category",
                count: { $sum: 1 },
                totalAmount: { $sum: "$amount" },
                expenses: { $push: "$$ROOT" }
            }
        },
        {
            $project: {
                _id: 0,
                category: "$_id",
                count: 1,
                totalAmount: 1,
                expenses: 1
            }
        }
    ]);

    return top10Expenses
}

// Get Last Expenses : Dynamic : Pass ASC,DESC and LIMIT
const getLastExpService = async (st, limit) => {
    const lastExps = await ExpenseModel.aggregate([
        { $sort: { date_sl: st } },
        { $limit: 20 },
        {
            $project: {
                amount: 1,
                description: 1,
                category: 1,
                expenseType: 1,
                date: 1
            }
        },
        {
            $group: {
                _id: "$category",
                count: { $sum: 1 },
                totalAmount: { $sum: "$amount" },
                expenses: { $push: "$$ROOT" }
            }
        },

    ])
    return lastExps
}



// Current Month Data
const getCurMonthExpService = async () => {
    const today = new Date();
    const fdmt = new Date(today.getFullYear(), today.getMonth(), 1).getTime()
    const ldmt = new Date(today.getFullYear(), today.getMonth() + 1, 0).getTime();
    const expThisMonth = await ExpenseModel.aggregate([
        { $sort: { date_sl: -1 } },
        {
            $match: {
                date_sl: {
                    $gte: fdmt,
                    $lte: ldmt
                }
            }
        },
        {
            $project: {
                amount: 1,
                description: 1,
                category: 1,
                expenseType: 1,
                date: 1
            },
        },
        {
            $group: {
                // _id: "$category", // if id = category then it will give category wise data
                _id: null,
                count: { $sum: 1 },
                totalAmount: { $sum: "$amount" },
                expenses: { $push: "$$ROOT" }
            }
        },
        {
            $project: {
                _id: 0,
                totalAmount: 1,
                expenses: 1,
                count: 1
            }
        }
    ])

    return expThisMonth
}

// Get Current Year Expense
const getCurYearExp = async (sortBy) => {
    const today = new Date();
    const fdmt = new Date(today.getFullYear(), 0, 1).getTime()
    const ldmt = new Date(today.getFullYear(), 11, 31).getTime();
    const expThisMonth = await ExpenseModel.aggregate([
        { $sort: { date_sl: -1 } },
        {
            $match: {
                date_sl: {
                    $gte: fdmt,
                    $lte: ldmt
                }
            }
        },
        {
            $project: {
                amount: 1,
                description: 1,
                category: 1,
                expenseType: 1,
                date: 1
            },
        },
        {
            $group: {
                _id: null,
                count: { $sum: 1 },
                totalAmount: { $sum: "$amount" },
                expenses: { $push: "$$ROOT" }
            }
        },
        {
            $project: {
                _id: 0,
                totalAmount: 1,
                expenses: 1,
                count: 1
            }
        }
    ])
    return expThisMonth
}



// Current Week
const getCurrentWeekExpService = async (str, end) => {
    const curWeekexp = await ExpenseModel.find({
        date_sl: {
            $gte: str,
            $lte: end
        }
    })
    return curWeekexp
}


// Expense Categorywise Expense
const getCatWiseExpService = async () => {
    const expCatWiseExp = await ExpenseModel.aggregate([
        { $sort: { date_sl: -1 } },
        {
            $project: {
                amount: 1,
                description: 1,
                category: 1,
                expenseType: 1,
                date: 1
            },
        },
        {
            $group: {
                _id: "$category",
                count: { $sum: 1 },
                totalAmount: { $sum: "$amount" },
                expenses: { $push: "$$ROOT" }
            }
        }
    ])
    return expCatWiseExp
}

// Expense Find With Custom parameter
const getCustExpService = async (category, sortOrder, expenseType, yearFilter, monthFilter) => {


    let query = {}
    // category 
    if (category === "credit" || category === "debit") {
        query.category = category
    }

    // expense type id
    if (expenseType) {
        query.expenseType = expenseType
    }

    // year Filter
    if (yearFilter) {
        const fdyt = new Date(2023, 0, 1);
        const ldyt = new Date(2023, 11, 31, 23, 59, 59, 999);
        console.log("=======================", fdyt)
        console.log("====================", ldyt)

        query.date_sl = {
            $gte: fdyt.getTime(),
            $lte: ldyt.getTime()
        }
    }

    // month Filter
    if (monthFilter) {
        // const fdmt = new Date(yearFilter || new Date().getFullYear(), monthFilter, 1);
        // const ldmt = new Date(yearFilter || new Date().getFullYear(), monthFilter, 0)

        const fdmt = new Date(yearFilter || new Date().getFullYear(), monthFilter - 1, 1)   //.getTime()
        const ldmt = new Date(yearFilter || new Date().getFullYear(), monthFilter, 0)  // .getTime();

        fdmt.setUTCHours(0, 0, 0, 0); // 12 AM 0:0:0
        console.log(fdmt)
        ldmt.setUTCHours(23, 59, 59, 0);
        console.log(ldmt)
        query.date_sl = {
            ...query.date_sl,
            $gte: fdmt.getTime(),
            $lte: ldmt.getTime()
        }


    }

    console.log(query)
    const custExp = await ExpenseModel.find(query).sort({ date_sl: sortOrder })
    return custExp
}

const serv = {
    getTopExpService,
    getCurrentWeekExpService,
    getCurMonthExpService,
    getLastExpService,
    getCurYearExp,
    getCatWiseExpService,
    getCustExpService
}

module.exports = { serv }
