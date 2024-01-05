
import mongoose from "mongoose";

const connectDB = async () => {
    try {
        console.log("Trying to Connect Mongo DB ....".bgYellow.bold)
        const conn = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log(
            `Conneted To Mongodb Databse ${conn.connection.host}`.bgMagenta.white
        );
    } catch (error) {
        console.log(`Errro in Mongodb ${error}`.bgRed.white);
    }
};

export default connectDB;