const { verify} = require("jsonwebtoken")
const user = require("../controllers/users.js")


function authenticate(req,res,next){
    const authHeader = req.header('Authorization')
    let token ;


    if(authHeader) { 
        token = authHeader.split(' ')[1]
        verify(token,process.env.ACCESS_TOKEN_SECRET,(err, user)=>{
            if(err) return res.sendStatus(403)
            req.user = user;
            console.log(user)
            next()
        })
    }
    else{
        res.status(403).send("you need to log in")
    }
    
}


module.exports = authenticate