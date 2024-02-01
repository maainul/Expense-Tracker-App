import { logger } from "../../middleware/logMiddleware.js";
import ExpenseType from "../../models/ExpenseType.js";
import { serv } from './../../service/services.js';




export const getAllExpTypeCtrl = async (req, res) => {
    try {
        // data destructure from query string like ?key=value
        const { search } = req.query
        // condition for searching
        const queryObject = {}
        //    const queryResult = ExpenseType.find(queryObject)
        //   const expeTyps = queryResult

        if (search) {
            queryObject.name = { $regex: search, $options: 'i' }
        }

        console.log("################################")
        console.log(queryObject)
        console.log("################################")

        const queryResult = await ExpenseType.find(queryObject)
        console.log("################# Expense Type ###########################")
        console.log(queryResult)
        console.log("################# Expense Type ###########################")

        // Set default sort order if not provided or unexpected
        // const expeTyps = await serv.expenseTypeService.getAllExpTypeServ({ req })
        if (!queryResult) {
            return res.status(200).send({
                success: true,
                message: 'No categories Found'
            })
        }
        logger.info(`Expense Type data ==> \n ${queryResult}`)
        return res.status(200).send({
            success: true,
            message: 'Get all expense Type successfully',
            totalExpTypes: queryResult.length,
            data: queryResult
        });
    } catch (error) {
        console.error('Error In Get Expense Type API:', error);
        const status = error.status || 500;

        return res.status(status).send({
            success: false,
            message: 'Error In get all expense Type',
            error: error.message || error,
        });
    }
};

