const express = require("express")

const app = express()

const port = 4002
app.listen(port, () => {
    console.log('App running on port ${port} ..')
})