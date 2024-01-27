import mongoose from "mongoose";
import { logger } from "../middleware/logMiddleware.js";

const connectDB = async () => {
  try {
    logger.info("Trying to Connect Mongo DB ....".bgYellow.bold);
    const CT = process.env.CONNECTION_STRING || "mongodb://127.0.0.1:27017/extrackerdb";
    const conn = await mongoose.connect(CT);
    logger.info(
      `Conneted To Mongodb Databse ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    logger.info(`Errro in Mongodb ${error}`.bgRed.white);
  }
};


export default connectDB;
