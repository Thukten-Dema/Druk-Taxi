const express = require('express')
const driverController = require('../controller/driverReqController')
const authController = require('./../controller/authController.js')

const router = express.Router()

router
    .route('/')
    .get(driverController.getAllDrivers)
    .post(driverController.createDriver)


router
    .route('/:id')
    .get(driverController.getDriver)
    .delete(driverController.deleteDriver)

module.exports = router