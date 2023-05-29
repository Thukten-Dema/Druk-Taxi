const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const userSchema = new mongoose.Schema({
    //sign up for passenger
    name: {
        type: String,
        required: [true, 'Please tell us your name!'],
    },
    email: {
        type: String,
        required: [true, 'Please provide your name!'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Provide a valid email'],
    },

    contact: {
        type: Number,
        required: [true, 'Your contact number!'],
    },

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

    //driver sign up
    name: {
        type: String,
        required: [true, 'Please tell us your name!'],
    },
    email: {
        type: String,
        required: [true, 'Please provide your name!'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Provide a valid email'],
    },

    contact: {
        type: Number,
        required: [true, 'Your contact number!'],
    },
    licenseNumber: {
        type: String,
        minlength: 5,
        maxlength: 5,
        select: false,

    },
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


    active: {
        type: Boolean,
        default: true,
        select: false,
    },
})
userSchema.pre('save', async function (next) {
    // Only run this function if password was actuually modified
    if (!this.isModified('password')) return next()

    //Hash  the password with cost of 12
    this.password = await bcrypt.hash(this.password, 12)

    // Delete passwordConfirm field\
    this.passwordConfirm = undefined
    next()
})
userSchema.pre('findOneAndUpdate', async function (next) {
    const update = this.getUpdate();
    if (update.password !== '' &&
        update.password !== undefined &&
        update.password == update.passwordConfirm) {

        //Hash the password with cost of 12
        this.getUpdate().password = await bcrypt.hash(update.password, 12)

        // Deletepassword field
        update.passwordConfirm = undefined
        next()
    } else
        next()
})
userSchema.methods.correctPassword = async function (
    candidatePassword,
    userPassword,
) {
    return await bcrypt.compare(candidatePassword, userPassword)
}







const User = mongoose.model('User', userSchema)
module.exports = User