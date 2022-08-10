const express = require('express');
const cors = require("cors");
const app = express();

const userRouter = require('./routes/users');

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());

app.use('/users', userRouter);
// app.get('/', (req,res)=>{
//     console.log("Here")
//     res.status(500).json({message:"Error"})
// })
app.get('/', (req, res) => {
    res.status(200).send("Let's go duo!!");
})

app.use((req, res, next) => {
    res.status(404).send('Not Found!');
});
  
app.use((req, res, next) => {
    console.error(err.stack);
    res.status(500).send({
        message: 'Internal Server Error',
        stacktrace: err.toString()
    });
})

app.listen(4000);

module.exports = app;