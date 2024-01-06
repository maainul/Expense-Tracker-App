import MValidator from "../validator/MValidator.js"
import SubscriptionModel from '../models/SubscribeUser.js'
import validationLog from "../utils/validationLog.js"
import { saveToDb } from "../utils/saveUtils.js"
// import { sendMail } from "../utils/sendVerificationEmail.js"
import generateVerificationCode from "../utils/getVerificationCode.js"


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

        // generate Code 
        const verificationCode = generateVerificationCode();

        const result = await sendMail(email, verificationCode)
        if (result.success) {
            const subsUser = await saveToDb(SubscriptionModel, {
                name: name,
                email: email,
                verificationCode: verificationCode
            })

            console.log(`User Subscription Added Successfully :\n ${subsUser}`)
            return res.status(201).send({
                success: true,
                message: 'User Subscription Successful',
                data: subsUser
            })
        } else {
            console.log(`Email Send Failed :\n ${result.data}`)
            return res.status(400).send({
                success: result.success,
                data: result.data,
                message: result.message
            })
        }
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

        const unSubsUser = await saveToDb(SubscriptionModel, {
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

const verifyUser = async (req, res) => {
    try {
        const { email, name, verificationCode } = req.body

        const user = await UserInfo.find(user => user.email === email)
        if (user.verificationCode === verificationCode) {
            const saveUserInfo = await save(SubscriptionModel, {
                name: user?.name,
                email: user?.email,
                subscribeDate: user?.date, // Set to the current date and time
                subscriptionFor: user?.subscriptionFor,
                subscriptionStatus: true,
            })
            return res.status(201).send({
                success: true,
                data: saveUserInfo,
                message: "Verfication Successful"
            })
        } else {
            return res.status(400).send({
                success: result.success,
                data: result.data,
                message: "Email Verification Failed"
            })
        }
    } catch (error) {
        console.error('Error In Veriry API:', error)
        const status = error.status || 500
        return res.status(status).send({
            success: false,
            message: 'Error In Veriry API',
            error: error.message || error,
        })
    }
}

export const subCtrl = {
    subscribeUser,
    unSubscribeUser,
    verifyUser
}
