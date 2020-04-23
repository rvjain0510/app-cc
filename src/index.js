const express = require('express')
require('./dataBase/mongoose')
const userRouter = require('./routers/user')
const bcrypt=require ('bcryptjs')
const app = express()
const port = process.env.PORT || 3000
app.use(express.json())
app.use(userRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
