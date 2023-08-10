const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')
const Joi = require('joi')
const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/crud");

const validationMiddleware = (req,res,next) =>{
    const schema = Joi.object().keys({
        name:Joi.string().required(),
        email:Joi.string().required(),
        age:Joi.number().required(),

    })
    const {error} = schema.validate(req.body);
    if(error){
        res.status(200).json({error:error})
    }else{
        next();
        console.log(response)
    }
}

app.get('/',validationMiddleware,(req,res)=>{
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.get('/getUser/:id',validationMiddleware,(req,res)=>{
    const id = req.params.id;
    UserModel.findById({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.put('/updateUser/:id',validationMiddleware,(req,res)=>{
    const id = req.params.id;
    UserModel.findByIdAndUpdate
    ({_id:id},{
        name:req.body.name, 
        email:req.body.email, 
        age:req.body.age})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.delete('/deleteUser/:id',(req,res)=>{
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
})

app.post("/createUser",validationMiddleware,(req,res)=>{
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})
app.listen(3001,()=>{
    console.log("Server is Running.");
})
