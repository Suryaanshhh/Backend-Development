const express=require('express');
const router=express.Router();
const path=require('path');
const rootdir=require('../helper/path')

router.post('/success',(req,res)=>{
    res.sendFile(path.join(rootdir,'views','success.html'))
})

module.exports=router;