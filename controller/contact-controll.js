const path=require('path')
const rootdir=require('../helper/path')


exports.Contact_US=(req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','contact.html'))
}


exports.success=(req,res)=>{
    res.sendFile(path.join(rootdir,'views','success.html'))
}
