const express = require('express');
const app = express()
const cors = require("cors");

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.get('/', (req,res)=>{
    console.log("Here")
    res.status(500).json({message:"Error"})
})

const userRouter = require('./routes/users')

app.use('/users', userRouter)
app.use(express.json());
app.listen(4000)