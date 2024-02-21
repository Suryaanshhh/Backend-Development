
const express=require('express');
const app=express();
const path=require('path')
const adminroute=require('./routes/admin');
const shoproute=require('./routes/shop');
const contactRoute=require('./routes/contact');
const successRoute=require('./routes/success');

app.use(adminroute);

app.use(shoproute);

app.use(contactRoute);

app.use(successRoute);

app.use(express.static(path.join(__dirname,'styles')))

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','notFound.html'))
})
app.listen(4000)