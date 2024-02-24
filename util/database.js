const mysql=require('mysql2');


const pool=mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'node-complete',
    password:'Suryansh@1'
})
module.exports=pool.promise()