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

        logger.info("Method : signin() - Check User Already exists Start")
        const validUser = await UserModel.findOne({ username });
        logger.info("Method : signin() - Check User Already exists End")

        if (!validUser) {
            return res.status(201).send({
                success: true,
                message: 'User Not Registered',
                errors: [{ "field": "username", "error": "user not found" }]
            });
        }

        logger.info("Method : signin() - User is Valid")
        const validPassword = await comparePassword(password, validUser.password)
        logger.info("Password Check From Compare Password : ")
        logger.info(validPassword)
        logger.info("Method : signin() - Password is valid")

        if (!validPassword) {
            return res.status(201).send({
                success: true,
                message: 'Wrong Credentials',
                errors: [{ "field": "password", "error": "password doesn't match" }]
            });
        }

        logger.info("Method : signin() - JWT Token Creation")
        const token = await JWT.sign({ _id: validUser._id }, process.env.JWT_SECRET, {
            expiresIn: "1d"
        })

        logger.info("Method : signin() - Token Created")
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
        logger.error('Internal Server Error')
        logger.error(error)
        const status = error.status || 500
        return res.status(status).send({
            success: false,
            message: 'Internal Server Error',
            errors: error
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
