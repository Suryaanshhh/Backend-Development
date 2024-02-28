const Sequelize=require('sequelize');

const sq=require('../util/database');

const Product=sq.define('product',{
  id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    primaryKey: true,
    allowNull:false,
  },

  title:{
  type:Sequelize.STRING,  
  },
  price:{
    type:Sequelize.DOUBLE,
    allowNull:false,
  },
  imageUrl:{
    type:Sequelize.STRING,
    allowNull:false
  },
  description:{
    type:Sequelize.STRING,
    allowNull:false
  }
});

module.exports=Product;