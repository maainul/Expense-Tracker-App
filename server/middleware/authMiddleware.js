const JWT = require('jsonwebtoken');
const UserModel = require('../models/User');

// Protected Routes : Token Based
const requireSignIn = async (req, res, next) => {
    try {
        const decode = JWT.verify(req.headers.authorization, process.env.JWT_SECRET);
        req.user = decode;
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            success: false,
            message: 'Unauthorized',
            error: 'Invalid or expired token',
        });
    }
};


// Admin access

const isAdmin = async (req, res, next) => {
    try {
        const user = await UserModel.findById(req.user.id)
        if (!user.role !== 'admin') {
            return res.status(401).send({
                success: false,
                message: 'Unauthorized Accesss'
            })
        } else {
            next()
        }

    } catch (error) {
        console.log(error)
        return res.status(401).send({
            success: false,
            message: "Error in Admin Middleware"
        })
    }
}



module.exports = { requireSignIn, isAdmin }