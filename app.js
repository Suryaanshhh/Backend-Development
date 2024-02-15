
const express=require('express');
const app=express();

const adminroute=require('./routes/admin');
const shoproute=require('./routes/shop');

app.use('/admin',adminroute);

app.use('/shop',shoproute);

app.use((req,res,next)=>{
    res.status(404).send('<h1>PAGE NOT FOUND</h1>')
})


app.listen(4000)