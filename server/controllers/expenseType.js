const ExpenseTypeModel = require("../models/ExpenseType");
const save = require("../utils/saveUtils");
const validationLog = require("../utils/validationLog");
const MValidator = require("../validator/MValidator");


// Validation Rules
const validationRules = {
    name: {
        type: 'string',
        required: true,
        max: 50,
        min: 3,
        exists: [true, 'Expense Type with this name already exists']
    },
    icon: {
        type: 'string',
        required: true,
        min: 1
    },
}



const createExpType = async (req, res) => {
    try {
        const { name, icon } = req.body;
        console.log(`Request data ===>\n name : ${name} icon :${icon}`.bgBlue);

        // Validation
        const validationResult = await MValidator(req.body, validationRules, ExpenseTypeModel);

        // Validation log
        validationLog(validationResult)


        if (!validationResult.isValid) {
            return res.status(400).send({
                success: false,
                message: 'Validation Failed',
                errors: validationResult.errors
            });
        }

        // Save Data in Database
        const expenseType = await save(ExpenseTypeModel, { name, icon })
        console.log(`Expense Type Added Successfully :\n ${expenseType}`);

        return res.status(201).send({
            success: true,
            message: 'Expense Type Added Successfully',
            data: expenseType,
        });

    } catch (error) {
        console.error('Error In Create Expense Type:', error)

        const status = error.status || 500
        return res.status(status).send({
            success: false,
            message: 'Error In Create Expense Type',
            error: error.message || error,
        });
    }
};
const getAllExpType = async (req, res) => {
    try {
        const { sortOrder } = req.body;
        // Set default sort order if not provided or unexpected
        const expeTyps = await ExpenseTypeModel.find().sort({ createdAt: sortOrder === "asc" ? 1 : -1 });

        console.log(`Expenses data ==> \n ${expeTyps}`);
        return res.status(200).send({
            success: true,
            message: 'Get all expense Type successfully',
            data: expeTyps
        });
    } catch (error) {
        console.error('Error In Get Type Expense API:', error);
        const status = error.status || 500;

        return res.status(status).send({
            success: false,
            message: 'Error In get all expense Type',
            error: error.message || error,
        });
    }
};


const exTypCtrl = {
    createExpType, getAllExpType
}

module.exports = exTypCtrl;
