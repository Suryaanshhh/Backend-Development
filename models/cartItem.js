const Sequelize=require('sequelize');
const sq=require('../util/database');

const CartItem=sq.define('cartItem',{
  id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  quantity:{
    type:Sequelize.INTEGER
  }
})

module.exports=CartItem;