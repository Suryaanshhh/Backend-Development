const express=require("express");
const router=express.Router();
const parsedBody=require('body-parser');
const path=require('path')
const rootdir=require('../helper/path')
router.use(parsedBody.urlencoded({extended:false}))

router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','add-product.html'))
 })
 
 router.post('/product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
 })
 

 module.exports=router