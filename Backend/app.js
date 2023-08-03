const express = require('express')
const app = express()

const mongoose = require('mongoose')
const cors = require('cors') //install : npm i cors

const User = require('./model/users')

//middlewares
app.use(cors())
app.use(express.urlencoded({ extended: false })) 
app.use(express.json())

//conection to database
const db_url = 'mongodb://localhost:27017/users'
mongoose.connect(db_url).then(()=>{
    console.log('Connection Established');
})

app.post('/login',(req,res)=>{
    User.findOne({email:req.body.email}).then((userData)=>{
        if (userData) {
            if (req.body.password === userData.password) {
                res.send({message:'login successfully'})
            } else {
                res.send({message:'please enter your valid password',status: 200})
            }
        } else {
            res.send({message: 'User not found'})
        }
    })
})


app.post('/register',async(req,res)=>{
    User.findOne({email:req.body.email}).then((userData)=>{
        if (userData) {
            // error msg
            res.send({message:'User already exists'})
        } else {
            // add the data
            let userData = new User({
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                email:req.body.email,
                password:req.body.password
            })
            userData.save().then(()=>{
                res.send({message:'user registered successfully'})
            }).catch(()=>{
                res.send({message:'user registration failed. Try after sometime'})
            })
        }
    })
})

app.listen(5000,()=>{
    console.log('server runned');
})