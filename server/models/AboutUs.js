import mongoose from "mongoose";


const expenseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
    },
    subtitle: {
        type: String,
        required: [true, 'Sub title is required'],
    },

    description: {
        type: String,
        required: [true, 'Description is required']
    },
    image: {
        type: String,
    },


}, { timeseries: true })

export default mongoose.model('AboutUs', expenseSchema)
