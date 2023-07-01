const jwt = require("jsonwebtoken")


const verify = (req,res,next)=>{
    
    const token = req.headers.authorization.split(" ")[1]
    
    jwt.verify(token,process.env.SECRET_KEY,(err,payload)=>{
       if(err) res.status(403).json("invalid token")
        req.user = payload
       next()
    })

    
}


module.exports = verify