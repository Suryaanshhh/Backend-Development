
const express=require('express')
const app=express();
const parsedBody=require('body-parser')
app.use(parsedBody.urlencoded({extended:false}))

app.use('/add-product',(req,res,next)=>{
   res.send('<form action="/product" method="POST"><input type="text" name="Product"><input type="number" name="Quantity"><button type="submit">ADD</button>')
})

app.use('/product',(req,res,next)=>{
   console.log(req.body)
   res.redirect('/')
})

app.use('/',(req,res,next)=>{
    res.send('<h1>PRODUCT ADDED</h1>')
})
app.listen(4000)