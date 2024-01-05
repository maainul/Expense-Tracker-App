import { hash, compare } from 'bcrypt'

const hashPassword = async (pass) => {
    try {
        const salt = 10
        const passToStr = pass.toString()
        const hashPassword = await hash(passToStr, salt)
        return hashPassword
    } catch (error) {
        console.log(error);
    }
}

const comparePassword = async (pass, hp) => {
    return compare(pass, hp)
}


export default { hashPassword, comparePassword }


