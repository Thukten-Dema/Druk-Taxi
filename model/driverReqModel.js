const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const driverReqSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Your name please!'],
    },
    email: {
        type: String,
        required: [true, 'Please provide your name!'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Provide a valid email'],
    },
    contactNumber: {
        type: String,
        default: "xxx-xxx-xxx"
    },
    licenseNumber: {
        type: String,
        default: "xxx-xxx-xxx"
    },
    password: {
        type: String,
        required: [true, 'Please provide a password!'],
        minlength: 5,
        //password won't be included when we get the users
        select: false,
    },
    passwordConfirm: {
        type: String,
        required: [true, 'Please confirm your password'],
        validate: {
            validator: function (el) {
                return el === this.password
            },
            message: 'Passwords are not the same',
        }
    },

})

const driverReq = mongoose.model("driverReq", driverReqSchema)
module.exports = driverReq