const Sequelize=require('sequelize');

const sq=require('../util/database');

const User=sq.define('user',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true

    },
    name:{
        type:Sequelize.STRING
    },
    email:{
        type:Sequelize.STRING,
    }
})

module.exports=User;