const express =  require("express")

const app = express()
module.exports = app

app.use(express.json())

const userRouter = require('./routes/userRoutes')

app.use('/api/v1/passenger', userRouter)

/*Starting the server on port 4001. */
// const port = 4005
// app.listen(port,()=>{
//     console.log(`App running on port ${port} ..`)
// })