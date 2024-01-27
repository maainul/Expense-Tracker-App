import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import colors from "colors";
import connectDB from './config/connectDB.js';
import routes from "./routes/route.js";
import dotenv from "dotenv";


//configure env
dotenv.config()

//databse config
connectDB()

//rest object
const app = express()

//middelwares
app.use(cors())
app.use(express.json());
app.use(morgan('dev'))

// Router
app.use('/api/v1', routes)

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
    console.log(
        `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
            .white
    );
});