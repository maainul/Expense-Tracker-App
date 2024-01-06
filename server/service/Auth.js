import UserModel from '../models/User.js';
import saveToDb from '../utils/saveUtils.js';
import { hashPassword } from './../utils/authHelper.js';

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

export default { AuthServ }