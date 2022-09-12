const jwt = require('jsonwebtoken')


// authentication
const auth = (req,res,next)=>{

    var bearerToken = req.headers['token']
    if(bearerToken){

        next()
    }else{
        res.status(500).json({msg : "invalid token"})
    }
}


module.exports = auth