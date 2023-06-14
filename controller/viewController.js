const path = require('path')


/*SIGN UP PAGE*/
exports.getSignupForm = (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'signup.html'))
}


exports.getHome = (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'home.html'))
}


exports.getLoginForm = (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'login.html'))
}


exports.getProfile = (req, res) => {
    res.sendFile(path.join(__dirname, "../", "views", "profile.html"))
}


exports.bookRide = (req, res) => {
    res.sendFile(path.join(__dirname, "../", "views", "bookRide.html"))
}


exports.aboutUs = (req, res) => {
    res.sendFile(path.join(__dirname, "../", "views", "aboutus.html"))
}

exports.dashboard = (req, res) => {
    res.sendFile(path.join(__dirname, "../", "views", "dashboard.html"))
}


