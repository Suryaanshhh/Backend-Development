
const express=require('express')
const app=express();
const route=require('./route')

app.use((req,res,next)=>{
    console.log('In the middlewares')
    next()
})
app.use((req,res,next)=>{
    res.send( { key1: "hello" })
    console.log('In the new middlewares')
})
app.listen(4000)