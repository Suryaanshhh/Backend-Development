const Sequelize=require('sequelize');
const sq=require('../util/database');

const Cart=sq.define('cart',{
  id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  }
})

module.exports=Cart;