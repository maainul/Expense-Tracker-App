
import mongoose from "mongoose";
import { logger } from '../middleware/logMiddleware.js'

const connectDB = async () => {
    try {
        logger.info("Trying to Connect Mongo DB ....".bgYellow.bold)
        const conn = await mongoose.connect(process.env.CONNECTION_STRING);
        logger.info(
            `Conneted To Mongodb Databse ${conn.connection.host}`.bgMagenta.white
        );
    } catch (error) {
        logger.info(`Errro in Mongodb ${error}`.bgRed.white);
    }
};

export default connectDB;