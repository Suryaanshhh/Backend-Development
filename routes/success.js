const express=require('express');
const router=express.Router();
const path=require('path');
const rootdir=require('../helper/path')
const contactControll=require('../controller/contact-controll')
router.post('/success',contactControll.success)

module.exports=router;