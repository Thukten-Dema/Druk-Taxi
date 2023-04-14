const User = require('./../model/userModel')
const jwt = require ('jsonwebtoken')
// const AppError = require('./../utils/appError')

const signToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn :  process.env.JWT_EXPIRES_IN,
    })
}
exports.signup = async (req, res, next) => {
    try{
    const newUser = await User.create(req.body)
    const token = signToken(newUser._id)

    res.status(201).json({
        status : 'success',
        token,
        data : {
            user : newUser
        }
    }
    
    )}

    catch(err) {
        res.status(500).json({error: err.message});

    }
}