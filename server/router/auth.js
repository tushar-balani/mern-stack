const express = require('express')
const router = express.Router()
const dotenv = require('dotenv')
const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')
const authenticate = require('../middleware/authenticate')


dotenv.config({path:'./config.env'})

//connecting database
require('../db/conn')

const User = require('../models/userSchema')

//main page router
router.get('/', (req,res)=>{
    res.send(`Main page`)
})


//about section router





// router.post('/register',(req,res)=>{
//     // console.log(req.body)
//     // res.json({message : req.body})

//     const {name, email, phone, work, password, cpassword } = req.body

//     if(!name || !email || !phone || !work || !password || !cpassword){
//         return res.status(422).json({error: "Please fill the required properties "})
//     }
    
//     User.findOne({email:email})
//     .then((userExist) =>{
//         if(userExist){
//             return res.status(422).json({error: "this mail id is already in use "})
//         }

//         const user = new User({name, email, phone, work, password, cpassword })

//         user.save().then(()=>{
//             res.status(201).json({message: "user registered successfully"})
//         }).catch((err)=> res.status(500).json({message:"failed to register"}))

//     }).catch(err =>{console.log(err)})
// })




//registration router
router.post('/register', async (req,res)=>{
    
    
    const {name, email, phone, work, password, cpassword } = req.body
    

    //validating if any field is empty
    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error: "Please fill the required properties "})
    }
    
   try{ 

       const userExist = await User.findOne({email:email})
    //validating if mail id is unique and password/cpassword are same
     if(userExist){
            return res.status(422).json({error: "this mail id is already in use "})
        
        }else if(password != cpassword){
            return res.status(422).json({error: "password did not match"})
        }else{
            const user = new User({name, email, phone, work, password, cpassword })
    
            
            const userRegister = await user.save()     //saving the data recieved 
    
             if(userRegister){
                    res.status(201).json({message: "user registered successfully"})
                }
            else{
                res.status(500).json({message:"failed to register"})
                }
        }
        
}catch(err){
    console.log(err)
}
    
})

//contact us router

router.get('/contact', (req,res) =>{
    res.send(`Contact us`)
})


//signin router
router.post('/signin', async (req,res)=>{
    //res.send(`sign in here auth`)
    try{
        
        const {email,password} = req.body

        //validating if any field is empty
        if(!email || !password ){
            return res.status(400).json({error: "Please fill the required data"})
        }

        const userLogin = await User.findOne({email : email})

        //checking  password and mail id
        if(userLogin){
            const isMatch = await bcrypt.compare(password,userLogin.password)

            //generating the token
            const token = await userLogin.generateAuthToken() 
            console.log(token)
            res.cookie("jwtoken", token,{
                expires: new Date(Date.now()+25892000000),
                httpOnly: true 
            })

            if(!isMatch){
                res.status(400).json({error: "invalid credentials"})
            }else{
                res.json({message:"User signed in succesfully"})
            }
        }else{
            res.status(400).json({error: "invalid credentials"})
        }

        //console.log(userLogin)

        

    }catch(err){
        console.log(err)
    }
})


//signup router
// router.get('/signup', (req,res)=>{
//     res.send(`sign up here`)
// })

router.get('/about', authenticate, (req,res)=>{

    const cook = req.cookies.jwtoken
    res.send(req.rootUser)
    console.log("About User")
    console.log(cook)
})


//export
module.exports = router;