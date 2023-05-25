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
    res.sendFile(path.join(__dirname, "../", "views", "book_a_ride.html"))
}