const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
app.get('/',(req,res)=>{
    res.send('This is Hero Section')
})
app.get('/services',(req,res)=>{
    res.send('This is services page')
})
app.get('/players',(req,res)=>{
    const players =['a','b','c']
    res.send(players)
})
app.post('/login',(req,res)=>{
    let username= req.body.username;
    let password = req.body.password;
    if(username === 'abc' && password === '123'){
        console.log("login successful")
        res.send('Login successful')
    }else{
        res.send('Login failed')
    }
})
app.listen(5000,()=>{
    console.log('server started on port')
})