

import MValidator from '../validator/MValidator.js';
import validationLog from '../utils/validationLog.js';
import UserModel from '../models/User.js';
import AuthServ from '../service/Auth.js';
import JWT from 'jsonwebtoken';
import { comparePassword } from '../utils/authHelper.js';


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
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ Server $$$$$$$$$$$$$$$$$$$$$$")
        const { username, password } = req.body
        console.log(username, password)
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ Server $$$$$$$$$$$$$$$$$$$$$$")
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
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ Before valid user after log $$$$$$$$$$$$$$$$$$$$$$")
        const validUser = await UserModel.findOne({ username });
        console.log(validUser)
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ Before valid user after log $$$$$$$$$$$$$$$$$$$$$$")
        if (!validUser) {
            return res.status(201).send({
                success: true,
                message: 'User Not Found',
                errors: [{ "field": "username", "error": "user not found" }]
            });
        }
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ Valid Pass $$$$$$$$$$$$$$$$$$$$$$")
        const validPassword = await comparePassword(password, validUser.password)
        console.log(validPassword)
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ Before valid user after log $$$$$$$$$$$$$$$$$$$$$$")
        if (!validPassword) {
            return res.status(201).send({
                success: true,
                message: 'Wrong Credentials',
                errors: [{ "field": "password", "error": "password doesn't match" }]
            });
        }
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ token $$$$$$$$$$$$$$$$$$$$$$")
        const token = JWT.sign({ id: validUser._id }, process.env.JWT_SECRET, {
            expiresIn: "1d"
        })
        console.log(token)
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ token after $$$$$$$$$$$$$$$$$$$$$$")
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
        validationLog(validationResult)
        if (!validationResult.isValid) {
            return res.status(201).send({
                success: true,
                message: 'Validation Failed',
                errors: validationResult.errors
            });
        }

        //Registration Service Call
        const user = await AuthServ.RegisterUserService(req.body)
        return res.status(201).send({
            success: user.success,
            message: user.message,
            data: user.data,
        });

    } catch (error) {
        console.error('Error In User Registration.', error)

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
