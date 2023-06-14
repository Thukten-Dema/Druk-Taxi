const express = require("express")
const path = require('path')
const app = express()
const router = require('./routes/userRoutes')
const viewRouter = require('./routes/viewRoutes')
const rideRouter = require('./routes/rideRoutes')
const driverRouter = require('./routes/driverRoutes')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
app.use(express.static('public'));

app.use(cookieParser())
app.use(bodyParser.json());
app.use("/api/v1/driver", driverRouter)
app.use(express.json())
app.use('/api/v1/rides', rideRouter)
app.use('/', viewRouter)
app.use('/api/v1/users', router)
app.use(express.static(path.join(__dirname, 'views')))

/*Starting the server on port 4001. */
// const port = 4005
// app.listen(port,()=>{
//     console.log(`App running on port ${port} ..`)
// })

module.exports = app