const MValidator = require('../validator/MValidator')
const validationLog = require('../utils/validationLog');
const UserModel = require('../models/User');
const { filterFields } = require('../utils/filterFields');

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

const getUserInfo = async (req, res) => {
    try {
        // Ensure that req.user and req.user.id are defined
        if (!req.user || !req.user.id) {
            return res.status(401).send({
                success: false,
                message: 'Unauthorized',
                error: 'Invalid or missing user ID in the request',
            });
        }
        const userInfo = await UserModel.findById(req.user.id)
        if (!userInfo) {
            return res.status(404).send({
                success: false,
                message: 'User Not Found',
                errors: [{ "field": "id", "error": "user not found" }]
            });
        }
        // Define fields to include in the response
        const fields = ["_id", "username", "email", "mobileNumber", "role", "firstname", "lastname", "area", "town", "city"];
        const userResponse = filterFields(userInfo, fields)
        return res.status(200).send({
            success: true,
            message: "User Info Retrieved Successfully",
            user: userResponse


        });

    } catch (error) {
        console.error('Error In Get User:', error)
        const status = error.status || 500
        return res.status(status).send({
            success: false,
            message: 'Error In Get Single User',
            error: error.message || error,
        });
    }

}

const usrCtrl = {
    updateUser,
    listUser,
    getUserInfo
}

module.exports = { usrCtrl }