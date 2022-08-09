const express = require('express');
const app = express()

app.get('/', (req,res)=>{
    console.log("Here")
    res.status(500).json({message:"Error"})
})

const userRouter = require('./routes/users')
app.use('/users', userRouter)
app.listen(3000)