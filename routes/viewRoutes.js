const express = require('express')
const router = express.Router()
const viewsController = require('./../controller/viewController')

router.get('/', viewsController.getHome)
router.get('/signup', viewsController.getSignupForm)
router.get('/driver', viewsController.getDriverSignUp)



module.exports = router