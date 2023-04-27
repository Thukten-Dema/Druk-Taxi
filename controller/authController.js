const User = require('./../model/userModel')
const jwt = require ('jsonwebtoken')
// const AppError = require('./../utils/appError')

const createSendToken = (user, statusCode, res) => {
    const token = signToken(user._id)
    const cookieOptions = {
        expires: new Date(
            Date.now() + process.env.JWT_EXPIRES_IN * 24 * 60 * 1000, 
        ),
        httpOnly: true,
    }
    res.cookie('jwt', token, cookieOptions)
    
    res.status(statusCode).json({
        status: "success",
        token,
        data : {
            user
        }
    })
}

const signToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn :  process.env.JWT_EXPIRES_IN,
    })
}
exports.signup = async (req, res, next) => {
    try{
    const newUser = await User.create(req.body)
    createSendToken(newUser, 201, res)
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

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body

        //check if the email and password exits
        if (!email || !password) {
            return next(new AppError("Please provide an email and password", 400))
        }

        //check if the user exits && and password is correct
        const user = await User.findOne({ email }).select('+password')

        console.log(user)
        if (!user || !(await user.correctPassword(password, user.password))) {
            return next(new AppError('Incorrect email or password', 401))
        }

        //If everything is ok, send token to client 
        createSendToken(user, 201, res)


    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}