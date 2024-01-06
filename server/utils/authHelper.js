import bcrypt from 'bcrypt'

export const hashPassword = async (pass) => {
    try {
        const salt = 10
        const passToStr = pass.toString()
        const hashPassword = await bcrypt.hash(passToStr, salt)
        return hashPassword
    } catch (error) {
        console.log(error);
    }
}

export const comparePassword = async (pass, hp) => {
    return bcrypt.compare(pass, hp)
}


