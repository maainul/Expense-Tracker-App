

import MValidator from '../validator/MValidator.js';
import validationLog from '../utils/validationLog.js';
import UserModel from '../models/User.js';
import JWT from 'jsonwebtoken';
import { comparePassword } from '../utils/authHelper.js';
import { SignupUserService } from './../service/Auth.js';
import { logger } from '../middleware/logMiddleware.js';


// Validation Rules
const validationRules = {

    email: {
        type: 'string',
        required: true,
        max: 50,
        min: 3,
        exists: [true, 'Email already exists']
    },
    username: {
        type: 'string',
        required: true,
        max: 50,
        min: 3,
        exists: [true, 'Username already exists']
    },
    password: {
        type: 'string',
        required: true,
        max: 50,
        min: 3,
    },
}

// 
const validationRulesLogin = {
    username: {
        type: 'string',
        required: true,
        max: 50,
        min: 3,
    },
    password: {
        type: 'string',
        required: true,
        max: 50,
        min: 3,
    }
}


const signin = async (req, res) => {
    try {
        const { username, password } = req.body
        logger.info(username, password)
        const validationResult = await MValidator(req.body, validationRulesLogin, UserModel);
        // Validation log
        validationLog(validationResult)
        if (!validationResult.isValid) {
            return res.status(201).send({
                success: true,
                message: 'Validation Failed',
                errors: validationResult.errors
            });
        }
        logger.info("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ Before valid user after log $$$$$$$$$$$$$$$$$$$$$$")
        const validUser = await UserModel.findOne({ username });
        logger.info(validUser)
        logger.info("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ Before valid user after log $$$$$$$$$$$$$$$$$$$$$$")
        if (!validUser) {
            return res.status(201).send({
                success: true,
                message: 'User Not Found',
                errors: [{ "field": "username", "error": "user not found" }]
            });
        }
        logger.info("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ Valid Pass $$$$$$$$$$$$$$$$$$$$$$")
        const validPassword = await comparePassword(password, validUser.password)
        logger.info(validPassword)
        logger.info("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ Before valid user after log $$$$$$$$$$$$$$$$$$$$$$")
        if (!validPassword) {
            return res.status(201).send({
                success: true,
                message: 'Wrong Credentials',
                errors: [{ "field": "password", "error": "password doesn't match" }]
            });
        }
        logger.info("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ token $$$$$$$$$$$$$$$$$$$$$$")
        const token = JWT.sign({ id: validUser._id }, process.env.JWT_SECRET, {
            expiresIn: "1d"
        })
        logger.info(token)
        logger.info("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ token after $$$$$$$$$$$$$$$$$$$$$$")
        return res.status(200).send({
            success: true,
            message: "Signin Successfull",
            user: {
                _id: validUser._id,
                username: validUser.username,
                email: validUser.email,
                mobileNumber: validUser.mobileNumber
            },
            token
        })

    } catch (error) {
        console.error('Internal Server Error', error)
        const status = error.status || 500
        return res.status(status).send({
            success: false,
            message: 'Internal Server Error',
        });
    }
}


const signup = async (req, res) => {
    try {
        // Validation
        const validationResult = await MValidator(req.body, validationRules, UserModel);
        // Validation log
        logger.info('Validation Result');
        if (!validationResult.isValid) {
            return res.status(201).send({
                success: true,
                message: 'Validation Failed',
                errors: validationResult.errors
            });
        }
        //Registration Service Call
        logger.error('Signup Service Start')
        const user = await SignupUserService(req.body)
        logger.error('Signup Service End')
        return res.status(201).send({
            success: user.success,
            message: user.message,
            data: user.data,
        });

    } catch (error) {
        logger.error('Errror in Uer Registration')
        const status = error.status || 500
        return res.status(status).send({
            success: false,
            message: 'Error In User Registration.',
            error: error.message || error,
        });
    }
};


export const authServ = {
    signin,
    signup
}
