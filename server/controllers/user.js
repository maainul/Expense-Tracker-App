
const bcryptjs = require('bcryptjs')
const MValidator = require('../validator/MValidator')
const validationLog = require('../utils/validationLog');
const UserModel = require('../models/User');
const { AuthServ } = require('../service/Auth');
const jwt = require('jsonwebtoken');


// Validation Rules
const validationRules = {
    firstname: {
        type: 'string',
        required: true,
        max: 50,
        min: 3,
    },
    lastname: {
        type: 'string',
        required: true,
        max: 50,
        min: 3,
    },
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
        exists: [true, 'Email already exists']
    },
    password: {
        type: 'string',
        required: true,
        max: 50,
        min: 3,
    },
    mobileNumber: {
        type: 'string',
        required: true,
        max: 13,
        min: 8,
        exists: [true, 'Mobile already exists']
    },
}

const createUser = async (req, res) => {
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
        console.error('Error In Create User:', error)

        const status = error.status || 500
        return res.status(status).send({
            success: false,
            message: 'Error In Create User',
            error: error.message || error,
        });
    }
};

const updateUser = async (req, res) => {
    try {

        // TODO : User Only Update Ther account.Get Data From Login Info
        // if (req.user.id !== req.params.id) {
        //     return res.status(401).send({
        //         success: false,
        //         message: 'You can update only your account!',
        //     });
        // }

        const id = req.params.id
        const { name, email, mobileNumber } = req.body;
        console.log(`User Input : ${JSON.stringify(req.body)}`)
        const userData = await UserModel.findById({ _id: id })
        console.log(`User Already Existed Data : ${userData}`)

        const updatedData = {
            name: name || userData?.name,
            email: email || userData?.email,
            mobileNumber: mobileNumber || userData?.mobileNumber,
        };
        // Validation
        const validationResult = await MValidator(updatedData, validationRules, UserModel);

        // Validation log
        validationLog(validationResult)

        if (!validationResult.isValid) {
            return res.status(400).send({
                success: false,
                message: 'Validation Failed',
                errors: validationResult.errors
            });
        }

        const updatedUserData = await UserModel.findByIdAndUpdate(id, { $set: updatedData }, { new: true });
        console.log(`User Updated Successfully :\n ${updatedUserData}`);

        return res.status(201).send({
            success: true,
            message: 'User updated Successfully',
            data: updatedUserData,
        });

    } catch (error) {
        console.error('Error In Updated User:', error)

        const status = error.status || 500
        return res.status(status).send({
            success: false,
            message: 'Error In Updated User',
            error: error.message || error,
        });
    }
};

const listUser = async (req, res) => {
    try {
        const ulist = await UserModel.find()
        ulist.password = undefined
        console.error('Get All User:', ulist)
        return res.status(201).send({
            success: true,
            message: 'User List',
            data: ulist,
        });

    } catch (error) {
        console.error('Error In Updated User:', error)
        const status = error.status || 500
        return res.status(status).send({
            success: false,
            message: 'Error In Get All User List',
            error: error.message || error,
        });
    }
}

const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body
        const validUser = await UserModel.findOne({ username });
        if (!validUser) {
            return res.status(201).send({
                success: true,
                message: 'User Not Found',
            });
        }
        const validPassword = bcryptjs.compareSync(password, validUser.password)
        if (!validPassword) {
            return res.status(201).send({
                success: true,
                message: 'Wrong Credentials',
            });
        }

        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET)
        const expiryDate = new Date(Date.now() + 3600000)
        validUser.password = undefined

        return res.cookie('access_token', token, {
            httpOnly: true,
            expires: expiryDate
        }).status(201).json({
            success: true,
            message: "Successfully Logged In",
            user: validUser
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

const usrCtrl = {
    createUser,
    updateUser,
    listUser,
    loginUser
}

module.exports = { usrCtrl }