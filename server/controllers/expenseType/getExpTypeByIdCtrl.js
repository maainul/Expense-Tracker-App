import { logger } from "../../middleware/logMiddleware.js";
import { serv } from "../../service/services.js";




export const getExpTypeByIdCtrl = async (req, res) => {
    try {
        const id = req.query.id;
        // Set default sort order if not provided or unexpected
        const expeTyps = await serv.expenseTypeService.getExpenseTypeByIdServ({ id })
        logger.info(`Expense Type data ==> \n ${expeTyps}`)
        return res.status(200).send({
            success: true,
            message: 'Get all expense Type successfully',
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