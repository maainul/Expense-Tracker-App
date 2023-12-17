const MValidator = require("../validator/MValidator")
const SubscriptionModel = require('../models/SubscribeUser')
const validationLog = require("../utils/validationLog")
const save = require("../utils/saveUtils")

const validationRules = {
    name: {
        type: 'string',
        required: [true, 'Name is required'],
    },
    email: {
        type: 'string',
        required: [true, 'Email is required'],
    },

}

const subscribeUser = async (req, res) => {
    try {
        const { email, name, subscriptionFor } = req.body
        // TODO : Get Data From User 
        // Get Data From Tick Subscription (email) //Get Data From React Frontend Context api / Redux
        // const user = await UserInfo.find({ email: req.body.email })
        //const user = await UserInfo.find(user => user.email === email)

        const validationResult = await MValidator(req, validationRules, SubscriptionModel)

        validationLog(validationResult)

        if (!validationResult.isValid) {
            return res.status(400).send({
                success: false,
                message: 'Validation Failed',
                errors: validationResult.errors
            })
        }
        // TODO : Send Confirmation Mail to User Mail.Then Verify User after Verify Subscription Will be possible
        const subsUser = await save(SubscriptionModel, {
            name: name,
            email: email,
        })
        console.log(`User Subscription Added Successfully :\n ${subsUser}`)
        return res.status(201).send({
            success: true,
            message: 'User Subscription Successful',
            data: subsUser
        })

    } catch (error) {
        console.error('Error In User Subscription API:', error)
        const status = error.status || 500
        return res.status(status).send({
            success: false,
            message: 'Error In User Subscription API',
            error: error.message || error,
        })
    }
}

const unSubscribeUser = async (req, res) => {
    try {
        const { email } = req.body
        // Get Data From Tick Subscription (email) //Get Data From React Frontend Context api / Redux
        // const user = await UserInfo.find({ email: req.body.email })
        const user = await UserInfo.find(user => user.email === email)
        if (user == undefined) {
            return res.status(400).send({
                success: false,
                message: `You don't have any subscription. Please Subscribe First`,
                data: 'Subscription Link:www.subscription.com'
            })
        }

        const unSubsUser = await save(SubscriptionModel, {
            name: user?.name,
            email: user?.email,
            subscribeDate: user?.date, // Set to the current date and time
            subscriptionFor: user?.subscriptionFor,
            subscriptionStatus: false
        })
        console.log(`User UnSubscribe Successfully :\n ${unSubsUser}`)
        return res.status(201).send({
            success: true,
            message: 'User UnSubscribe Successful',
            data: unSubsUser
        })

    } catch (error) {
        console.error('Error UnSubscribe API:', error)
        const status = error.status || 500
        return res.status(status).send({
            success: false,
            message: 'Error In User UnSubscribe API',
            error: error.message || error,
        })
    }
}


// User Info Test Data Remove after user registration and login
const UserInfo = [
    {
        email: 'test1@user.com',
        name: 'Mr. Test 1 User',
    },
    {
        email: 'user2@gmail.com',
        name: 'Mr. Test 2 User',

    },
    {
        email: 'test3@user.com',
        name: 'Mr. Test 3 User',

    }
]

module.exports = { subscribeUser, unSubscribeUser }