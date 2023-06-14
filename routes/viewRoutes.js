const express = require('express')
const router = express.Router()
const viewsController = require('./../controller/viewController')
const authController = require('./../controller/authController')


router.get('/signup', viewsController.getSignupForm)
router.get('/', viewsController.getHome)
router.get('/login', viewsController.getLoginForm)
router.get('/profile', authController.protect, viewsController.getProfile)
router.get('/ride', authController.protect, viewsController.bookRide)
router.get('/about', authController.protect, viewsController.aboutUs)
router.get('/dashboard', authController.protect, viewsController.dashboard)
module.exports = router