import { logger } from '../middleware/logMiddleware.js'

const validationLog = (validationResult) => {
    const isValid = validationResult.isValid;
    const errors = validationResult.errors;
    if (isValid) {
        logger.info('Validation Successful'.bgGreen);
    } else {
        logger.info('Validation Failed in these fields'.bgRed);
        if (isValid != undefined && !errors != undefined) {
            for (const error of errors) {
                logger.info(`Field : ${error.field} Error: ${error.error}`.bgRed);
            }
        }
    }
};

export default validationLog;
