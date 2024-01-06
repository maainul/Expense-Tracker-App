import bcrypt from 'bcrypt'
import { logger } from '../middleware/logMiddleware.js'

export const hashPassword = async (pass) => {
    try {
        const salt = 10
        const passToStr = pass.toString()
        logger.info('Hash Funciton is Called For Create Hash Password')
        const hashPassword = await bcrypt.hash(passToStr, salt)
        logger.info(`${hashPassword}`)
        logger.info(`Hash Funciton Returend Successfull`)
        return hashPassword
    } catch (error) {
        logger.info(`Hash Funciton :  Error While Hashed Password`)
        logger.info(error);
    }
}

export const comparePassword = async (pass, hp) => {
    logger.info('Compare Password Funciton is Called')
    const cp = bcrypt.compare(pass, hp)
    logger.info(`Compare Password After Funciton Called ${cp}`)
    return cp
}
