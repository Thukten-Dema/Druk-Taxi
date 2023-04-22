const express = require('express')
const router = express.Router()
const viewsController = require('./../controller/viewController')

router.get('/signup', viewsController.getSignupForm)


module.exports = router