const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, 'Name must be three characters long'],
        maxlength: [50, 'User name can not be longer than 50 characters long']
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true
    },
    mobileNumber: {
        type: String,
    },
    role: {
        type: String,
        default: 'user'
    },
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema)