const express = require('express')
const router = express.Router()
const viewsController = require('./../controller/viewController')



router.get('/signup', viewsController.getSignupForm)
router.get('/', viewsController.getHome)
router.get('./login', viewsController.getLoginForm)

module.exports = router