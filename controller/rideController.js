const { json } = require('express')
const rides = require('../model/rideModel')

exports.getAllRides = async (req, res) => {
    try {
        const ride1 = await rides.find()
        res.status(200).json({
            status: "success",
            results: ride1.length,
            data: {
                ride1
            }
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: "Invalid Data Sent!"
        })
    }
}

exports.getRides = async (req, res) => {
    try {
        const ride1 = await rides.findById(req.params.id)

        res.status(200).json({
            status: "success",
            results: ride1.length,
            data: {
                ride1
            }
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        })
    }
}

exports.createRide = async (req, res) => {
    try {

        const newRide = await rides.create(req.body)

        res.status(200).json({
            status: "success",
            data: {
                news: newRide
            }
        })
    } catch (err) {
        console.log("Fail test")
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}

exports.updateRide = async (req, res) => {
    try {
        const ride1 = await rides.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        })
        res.status(200).json({
            status: "success",
            data: {
                ride1
            }
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}

exports.deleteride = async (req, res) => {
    try {
        const ride = await rides.findByIdAndDelete(req.params.id)

        res.status(200).json({
            status: 'success',
            data: {
                ride
            }
        })
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err,
        })
    }
}