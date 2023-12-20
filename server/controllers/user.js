const MValidator = require('../validator/MValidator')
const validationLog = require('../utils/validationLog');
const UserModel = require('../models/User');
const save = require('../utils/saveUtils');




// Validation Rules
const validationRules = {
    name: {
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
    }
}

const createUser = async (req, res) => {
    try {
        const { name, email, mobileNumber } = req.body;
        console.log(`Request data ===>\n name : ${name} email :${email}  mobileNumber:${mobileNumber}`.bgBlue);

        // Validation
        const validationResult = await MValidator(req.body, validationRules, UserModel);

        // Validation log
        validationLog(validationResult)


        if (!validationResult.isValid) {
            return res.status(400).send({
                success: false,
                message: 'Validation Failed',
                errors: validationResult.errors
            });
        }

        // Save Data in Database
        const user = await save(UserModel, { name, email, mobileNumber })
        console.log(`User Added Successfully :\n ${user}`);

        return res.status(201).send({
            success: true,
            message: 'User Added Successfully',
            data: user,
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

module.exports = { createUser, updateUser };
