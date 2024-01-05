import ExpenseModel from "../models/Expense.js";
import ExpenseType from "../models/ExpenseType.js";

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
    let so = 'desc'
    let query = {}
    // category 
    if (category === "credit" || category === "debit") {
        query.category = category
    }
    // default sort : desc
    if (sortOrder) {
        so = sortOrder
    }

    // expense type id
    if (expenseType) {
        query.expenseType = expenseType
    }

    // year Filter
    if (yearFilter) {
        const fdyt = new Date(2023, 0, 1);
        const ldyt = new Date(2023, 11, 31, 23, 59, 59, 999);
        query.date_sl = {
            $gte: fdyt.getTime(),
            $lte: ldyt.getTime()
        }
    }

    // month Filter
    if (monthFilter) {
        const fdmt = new Date(yearFilter || new Date().getFullYear(), monthFilter - 1, 1)
        const ldmt = new Date(yearFilter || new Date().getFullYear(), monthFilter, 0)

        fdmt.setUTCHours(0, 0, 0, 0); // 12 AM 0:0:0
        ldmt.setUTCHours(23, 59, 59, 0);
        query.date_sl = {
            ...query.date_sl,
            $gte: fdmt.getTime(),
            $lte: ldmt.getTime()
        }
    }

    const custExp = await ExpenseModel.find(query)
        .populate('expenseType', 'name icon') // Populate the 'expenseType' field with 'name' and 'icon'
        .sort({ date_sl: so })
    return custExp
}

const getExpTypeWiseService = async () => {
    const expenses = await ExpenseModel.aggregate([
        {
            $sort: { date_sl: -1 }
        },
        {
            $group: {
                _id: "$expenseType",
                count: { $sum: 1 },
                totalAmount: { $sum: "$amount" },
                expenses: { $push: "$$ROOT" }
            }
        }
    ]);

    const enrichedExpenses = await Promise.all(expenses.map(async (expense) => {
        const expenseTypeDetails = await ExpenseType.findById(expense._id);
        return {
            ...expense,
            expenseTypeName: expenseTypeDetails ? expenseTypeDetails.name : null,
            expenseTypeIcon: expenseTypeDetails ? expenseTypeDetails.icon : null,
        };
    }));

    return enrichedExpenses;
};

export const serv = {
    getTopExpService,
    getCurrentWeekExpService,
    getCurMonthExpService,
    getLastExpService,
    getCurYearExp,
    getCatWiseExpService,
    getCustExpService,
    getExpTypeWiseService,
}
