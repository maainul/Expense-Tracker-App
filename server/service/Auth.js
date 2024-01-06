import UserModel from '../models/User.js';
import { hashPassword } from './../utils/authHelper.js';
import { saveToDb } from './../utils/saveUtils.js';


export const SignupUserService = async (body) => {
    try {
        const { email, username, password } = body;
        console.log('Signup Service Hashed Password Start.........')
        const hashedPassword = await hashPassword(password)
        console.log(`Signup Service Hashed Password End with info : ${hashedPassword}`)
        // Save Data in Database
        console.log(`Save Into Database start..........`)
        const user = await saveToDb(UserModel, {
            email,
            username,
            password: hashedPassword,
        })
        console.log(`Save Into Database end with info`)
        console.log(user)
        console.log(`User Added Successfully`)
        return {
            success: true,
            message: "User Added Successfully",
            data: user
        }
    } catch (error) {
        console.log(`User Not Added Successfully`)
        return {
            success: false,
            message: "Internal Server Error",
            data: {}
        }
    }
}



