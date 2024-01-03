const UserModel = require('../models/User');
const { hashPassword } = require('../utils/authHelper');
const { saveToDb } = require('../utils/saveUtils');

const RegisterUserService = async (body) => {
    try {
        const { email, username, password } = body;
        const hashedPassword = await hashPassword(password)
        // Save Data in Database
        const user = await saveToDb(UserModel, {
            email,
            username,
            password: hashedPassword,
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