const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
    //서버랑 클라이언트 Network 연결해야되는데 
    //로컬호스트가 다르기때문에 연결테스트를 하려면 
    //완성된 코드를 머지한후 각자의 로컬호스트에서 통신테스트를 해야함
   
})
router.get('/', (req,res)=>{
    //login   //localhost:3000/login
    // if(req.id === "test" && req.password === "123")
    // {
    //     res.status(200).send("Login 1");
    // } 
    // else {
    //     res.status(200).send("Login 2");
    // }
    console.log("=======");
    res.status(200).send("Login 33");
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
    console.log("/:id'")
    let data = {}
    //wallet address
    //1. getNFT by owner wallet address
    //2. send data 
    if(req.params.id === "0x138792f224c7c113e864013381a1e63548348aa0"){
        data = 
            {
                "id": 1,
                "title": "cbpark NFT dummy",
                "description": "duo dummy data",
                "price": 1499,
                "brand": "Microsoft",
                "category": "nft",
                "thumbnail": "https://dummyjson.com/image/i/products/8/thumbnail.jpg",
                "images": [
                  "https://dummyjson.com/image/i/products/8/1.jpg",
                  "https://dummyjson.com/image/i/products/8/2.jpg",
                  "https://dummyjson.com/image/i/products/8/thumbnail.jpg"
                ]
            }
    }
    else if (req.params.id === "0x2Bd964197d5f5b680bF34740574Ded4b2B4aEA9d"){
        data = 
            {
                "id": 2,
                "title": "yumi.kim NFT dummy",
                "description": "duo dummy data",
                "price": 778787,
                "brand": "t",
                "category": "nft",
                "thumbnail": "https://dummyjson.com/image/i/products/8/thumbnail.jpg",
                "images": [
                  "https://dummyjson.com/image/i/products/8/3.jpg",
                  "https://dummyjson.com/image/i/products/8/4.jpg",
                  "https://dummyjson.com/image/i/products/8/thumbnail.jpg"
                ]
            }
    }
    else{
        data = "";
    }
    res.send(data)
})
module.exports = router