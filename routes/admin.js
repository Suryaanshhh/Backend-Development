const express=require("express");
const router=express.Router();
const parsedBody=require('body-parser');

router.use(parsedBody.urlencoded({extended:false}))

router.get('/add-product',(req,res,next)=>{
    res.send('<form action="/admin/product" method="POST"><input type="text" name="Product"><input type="number" name="Quantity"><button type="submit">ADD</button>')
 })
 
 router.post('/product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
 })
 

 module.exports=router