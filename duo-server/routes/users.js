const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
    //서버랑 클라이언트 Network 연결해야되는데 
    //로컬호스트가 다르기때문에 연결테스트를 하려면 
    //완성된 코드를 머지한후 각자의 로컬호스트에서 통신테스트를 해야함
   

 
})
router.get('/login', (req,res)=>{
    //login 
    if(req.id === "test" && req.password === "123")
    {
        res.send("Login success")
    } 
    else {
        res.send("Login failure")
    }
})
router.get('/logout', (req,res)=>{
    //logout 
    res.send("User logout")
})
router.post('/new', (req,res)=>{
    // user sign
    res.send("Create User")
})
router.get('/:id', (req,res) => {
    //wallet address
    res.send(`Get User With Id ${req.params.id}`)
})
module.exports = router