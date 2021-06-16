const jwt = require('jsonwebtoken')
const User = require('../models/userSchema')
const dotenv = require('dotenv')


dotenv.config({path:'./config.env'})

const Authenticate = async (req,res,next) =>{

    try{

        const token = req.cookies.jwtoken;
        const verifyToken =   jwt.verify(token, process.env.SECRET_KEY)  

        const rootUser = await User.findOne({_id:verifyToken._id, "tokens.token":token})

        if(!rootUser){


            throw new Error('User not found')
        }

        req.token = token;
        req.rootUser = rootUser;
        req.userId = rootUser._id

        console.log(token)
        

        res.status(200).send("Authenticated")

        next()

    }catch(e){
        res.status(401).send("Unauthorized: No token provided   ")
        console.log(e)
    }

}

module.exports = Authenticate