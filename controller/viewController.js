const path = require('path')

/*SIGN UP PAGE*/
exports.getSignupForm = (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'signup.html'))
}
/* Home page */
exports.getHome =(req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views','home.html'))
}
/* Login page */
exports.getLoginForm =(req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views','login.html'))
}
/* Form page */
exports.getForm =(req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views','form.html'))
}

/* Driver_signup page */
exports.getDriver_signup =(req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views','driver_signup.html'))
}