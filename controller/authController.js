const User = require('./../model/userModel')
const jwt = require('jsonwebtoken')
const AppError = require("./../utils/appError")

// const AppError = require('./../utils/appError')
const { promisify, isNullOrUndefined } = require('util')

const createSendToken = (user, statusCode, res) => {
    const token = signToken(user._id)
    const cookieOptions = {
        expiresIn: new Date(
            Date.now() + process.env.JWT_EXPIRES_IN * 24 * 60 * 1000,
        ),
        httpOnly: true,
    }
    res.cookie('jwt', token, cookieOptions)

    res.status(statusCode).json({
        status: "success",
        token,
        data: {
            user
        }
    })
}

const signToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    })
}
exports.signup = async (req, res, next) => {
    try {
        const newUser = await User.create(req.body)
        const token = signToken(newUser._id)
        createSendToken(newUser, 201, res)
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body
        console.log("FrontEnd Login test")

        //check if the email and password exits
        if (!email || !password) {
            return next(new AppError("Please provide an email and password", 400))
        }

        //check if the user exits && and password is correct
        const user = await User.findOne({ email }).select('+password')

        if (!user || !(await user.correctPassword(password, user.password))) {
            return next(new AppError('Incorrect email or password', 401))
        }

        //If everything is ok, send token to client 
        createSendToken(user, 201, res)


    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.logout = (req, res) => {
    console.log("Logout test ")
    res.cookie('token', '', {
        expiresIn: new Date(Date.now() + 10 * 1000),
        httpOnly: true
    })
    res.status(200).json({ status: "success" })
}


exports.protect = async (req, res, next) => {
    console.log("Protect test ")
    try {
        //    Getting the token and checking if its there
        let token
        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith("Bearer")

        ) {
            token = req.headers.authorization.split(' ')[1]
            console.log("token test 1", token)
        } else if (req.cookies.jwt) {
            token = req.cookies.jwt
        }
        if (!token) {
            return next(
                new AppError("You are not logged in! Please Log in to get access.", 401),
            )
        }
        // Verifying the token
        const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET)
        const freshUser = await User.findById(decoded.id)
        if (!freshUser) {
            return next(
                new AppError('The user belonging to this token no longer exists', 401),
            )
        }
        req.user = freshUser
        next()


        // Check if user still exists

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}