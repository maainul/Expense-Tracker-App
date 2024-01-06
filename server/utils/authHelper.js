import bcrypt from 'bcrypt'

export const hashPassword = async (pass) => {
    try {
        const salt = 10
        const passToStr = pass.toString()
        console.log('Hash Funciton is Called For Create Hash Password')
        const hashPassword = await bcrypt.hash(passToStr, salt)
        console.log(`${hashPassword}`)
        console.log(`Hash Funciton Returend Successfull`)
        return hashPassword
    } catch (error) {
        console.log(`Hash Funciton :  Error While Hashed Password`)
        console.log(error);
    }
}

export const comparePassword = async (pass, hp) => {
    console.log('Compare Password Funciton is Called')
    const cp = bcrypt.compare(pass, hp)
    console.log(`Compare Password After Funciton Called ${cp}`)
    return cp
}
