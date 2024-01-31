import { logger } from "../../middleware/logMiddleware.js";
import { serv } from './../../service/services.js';




export const getAllExpTypeCtrl = async (req, res) => {
    try {
        // data destructure from query string like ?key=value
        //const { name } = req.query
        // condition for searching
        // const queryObject = {
        //     createdBy : req.user.userId
        // }






        // Set default sort order if not provided or unexpected
        const expeTyps = await serv.expenseTypeService.getAllExpTypeServ({ req })
        if (!expeTyps) {
            return res.status(200).send({
                success: true,
                message: 'No categories Found'
            })
        }
        logger.info(`Expense Type data ==> \n ${expeTyps}`)
        return res.status(200).send({
            success: true,
            message: 'Get all expense Type successfully',
            totalExpTypes: expeTyps.length,
            data: expeTyps
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

