const jwt = require("jsonwebtoken")
const verify = require("./auth_middlware")

const router = require("express").Router()

const users = [
    {
        id:1,
        username:"jade",
        isAdmin:false,
        password:"dhdh",
    },
    {
        id:2,
        username:"ahmed",
        isAdmin:true,
        password:"ghgh"
    },
    {
        id:3,
        username:"sara",
        isAdmin:false,
        password:"vbv"
    }
]

router.get("/login",(req,res)=>{
      
    const {username,password} = req.body

    const user = users.find(u=>u.username==username && u.password == password)

    if(user){
    
         const token = jwt.sign({id:user.id,isAdmin:user.isAdmin},process.env.SECRET_KEY,{expiresIn:"20m"})

         res.status(200).json({token:token})
    } 
    else{
        res.status(401).json("invalid credentials user")
    }


})


router.delete("/:userid",verify,(req,res)=>{
        console.log(req.user.id,req.params.userid);
    if(req.user.id == req.params.userid){
       res.status(200).json("user is deleted !!")
    }
    else {
      res.status(402).json("you don't have the authorization to delete")
    }

})

module.exports = router
