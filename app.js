const express =  require("express")

const app = express()
module.exports = app

app.use(express.json())

const userRouter = require('./routes/userRoutes')
const viewRouter = require('./routes/viewRoutes')

app.use('/api/v1/passenger', userRouter)
app.use('/api/v1/signup', userRouter)
app.use('/', viewRouter)

app.use(express.static(path.join(__dirname, 'views')))

/*Starting the server on port 4001. */
// const port = 4005
// app.listen(port,()=>{
//     console.log(`App running on port ${port} ..`)
// })