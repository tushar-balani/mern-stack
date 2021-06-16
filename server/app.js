const mongoose = require('mongoose')
const express = require('express')
const dotenv = require('dotenv')
const app = express()

const cookieParser = require('cookie-parser')

app.use(cookieParser())

app.use(express.json())
app.use(require('./router/auth'))
dotenv.config({path:'./config.env'})
require('./db/conn')
const PORT = process.env.PORT
//const User = require('./models/userSchema')







// app.get('/about',middleware, (req,res)=>{
//     res.send(`About Section`)
// })

// app.get('/contact', (req,res) =>{
//     res.send(`Contact us`)
// })

// app.get('/signin', (req,res)=>{
//     res.send(`sign in here`)
// })

// app.get('/signup', (req,res)=>{
//     res.send(`sign up here`)
// }) 

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})