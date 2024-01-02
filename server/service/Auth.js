const UserModel = require('../models/User');
const { hashPassword } = require('../utils/authHelper');
const save = require('../utils/saveUtils');

const RegisterUserService = async (body) => {
    try {
        const { firstname, lastname, mobileNumber, email, username, password, area, town, city } = body;
        const hashedPassword = await hashPassword(password)
        // Save Data in Database
        const user = await save(UserModel, {
            firstname,
            lastname,
            mobileNumber,
            email,
            username,
            password: hashedPassword,
            area,
            town,
            city

        })
        return {
            success: true,
            message: "User Added Successfully",
            data: user
        }
    } catch (error) {
        return {
            success: false,
            message: "Internal Server Error",
            data: {}
        }
    }
}


const AuthServ = { RegisterUserService }

module.exports = { AuthServ }