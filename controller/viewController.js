const path = require('path')

/*SIGN UP PAGE*/
exports.getSignupForm = (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'signup.html'))
}

exports.getDriverSignUp = (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'driver_signup.html'))
}

exports.getHome= (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'home.html'))
}
