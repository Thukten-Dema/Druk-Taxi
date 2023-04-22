const path = require('path')

/*SIGN UP PAGE*/
exports.getSignupForm = (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'signup.html'))
}