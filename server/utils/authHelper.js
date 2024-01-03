const bycrypt = require('bcrypt')

const hashPassword = async (pass) => {
    try {
        const salt = 10
        const passToStr = pass.toString()
        const hashPassword = await bycrypt.hash(passToStr, salt)
        return hashPassword
    } catch (error) {
        console.log(error);
    }
}

const comparePassword = async (pass, hp) => {
    return bycrypt.compare(pass, hp)
}


module.exports = { hashPassword, comparePassword }


