const mongoose = require('mongoose')
const validator = require('validator')

const newRideSchema = new mongoose.Schema({
    destination: {
        type: String,
        required: [true, "A name should be unique"],
    },

    userName: {
        type: String,
        required: [true, "User name needed"]
    },
    driverName: {
        type: String,
    },
    startingLocation: {
        type: String,
        required: true
    },
    passengers: {
        type: String,
        required: true,
        trim: true,
    },

    departureTime: {
        type: String,
        required: true
    },

    user: {
        type: String,
        required: true,
        default: "passenger"
    },

})
newRideSchema.pre(/^find/, function (next) {
    this.populate({
        path: 'user',
        select: 'name'
    })
    next()
})

const ride = mongoose.model("ride", newRideSchema)
module.exports = ride