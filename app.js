const express = require("express")
const path = require('path')
const app = express()
const router = require('./routes/userRoutes')
const viewRouter = require('./routes/viewRoutes')
const cookieParser = require('cookie-parser')
app.use(cookieParser())
app.use(express.json())
app.use('/', viewRouter)
app.use('/api/v1/users', router)
app.use(express.static(path.join(__dirname, 'views')))

/*Starting the server on port 4001. */
// const port = 4005
// app.listen(port,()=>{
//     console.log(`App running on port ${port} ..`)
// })

module.exports = app