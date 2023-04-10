const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    // name: {
    //     type: String,
    //     required: [true, 'Your name please!'],
    // },
    email: {
        type: String,
        //required: [true, 'Please provide your name!'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Provide a valid email'],
    },
    // photo: {
    //     type: String,
    //     default: 'default.jpg',
    // },
    role: {
        type: String,
        enum: ['passenger', 'driver', 'admin'],
        default: 'passenger',
    },
    password: {
        type: String,
        required: [true, 'Please provide a password!'],
        minlength: 5,
        //password won't be included when we get the users
        select: false,
    },
    active: {
        type: Boolean,
        default: true,
        select: false,
    },
    // passwordConfirm: {
    //     type : String,
    //     required: [true, 'Please confirm your password'],
    //     validate: {
    //         validator : function (el) {
    //             return al === this.password
    //         }, 
    //         message: 'Passwords are not the same' , 
    //     },
    // },
})

const User = mongoose.model('User', userSchema)
module.exports = User