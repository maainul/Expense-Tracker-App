const mongoose = require('mongoose')

const subscribeUserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'User Name is Required']
    },

    email: {
        type: String,
        required: [true, 'Email is required']
    },
    subscribeDate: {
        type: Date,
        default: Date.now,
        required: [true, 'Date is required']
    },
    subscriptionFor: {
        type: [String],
        default: ['Monthly', 'Yearly', 'Half-Yearly'],
        required: [true, 'Subscription types are required'],
        validate: {
            validator: function (value) {
                return Array.isArray(value) && value.length > 0;
            },
            message: 'Subscription types must be a non-empty array of strings'
        }
    },
    subscriptionStatus: {
        type: Boolean,
        default: true // Set default value to true

    }
})

const SubscribeUserModel = mongoose.model('SubscribeUser', subscribeUserSchema)
module.exports = SubscribeUserModel