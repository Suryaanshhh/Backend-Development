const express=require("express");
const router=express.Router();
const path=require('path')
const rootdir=require('../helper/path')
const contactControll=require('../controller/contact-controll')
router.get('/contactus',contactControll.Contact_US)

module.exports=router;