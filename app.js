const express =  require("express")
const path = require('path')

const app = express()

const userRouter = require('./routes/userRoutes')
const viewRouter = require('./routes/viewRoutes')

app.use(express.json())



app.use('/api/v1/passenger', userRouter)
app.use('/api/v1/signup', userRouter)
app.use('/api/v1/login', userRouter)
app.use('/', viewRouter)

app.use(express.static(path.join(__dirname, 'views')))

/*Starting the server on port 4001. */
// const port = 4005
// app.listen(port,()=>{
//     console.log(`App running on port ${port} ..`)
// })

module.exports = app