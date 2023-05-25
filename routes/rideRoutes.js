const express = require('express')
const rideController = require('../controller/rideController')
const authController = require('../controller/authController')
const router = express.Router()

router
    .route('/')
    .get(rideController.getAllRides)
    .post(authController.protect, rideController.createRide)

router
    .route('/:id')
    .get(rideController.getRides)
    .patch(rideController.updateRide)
    .delete(rideController.deleteride)

module.exports = router