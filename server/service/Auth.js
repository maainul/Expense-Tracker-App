
const UserModel = require('../models/User');
const findOne = require('../utils/findOne');
const save = require('../utils/saveUtils');


const LoginService = async () => {
    try {

    } catch (error) {

    }
}

const RegisterUserService = async (body) => {
    try {
        const { firstname, lastname, mobileNumber, email, username, password, area, town, city } = body;
        console.log(`Request data ===>\n name : ${firstname} email :${email}  mobileNumber:${mobileNumber}`.bgBlue);
        // Save Data in Database
        const user = await save(UserModel, {
            firstname,
            lastname,
            mobileNumber,
            email,
            username,
            password,
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


const AuthServ = {
    RegisterUserService,
    LoginService
}

module.exports = { AuthServ }