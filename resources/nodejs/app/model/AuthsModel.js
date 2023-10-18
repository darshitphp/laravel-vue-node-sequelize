const Sequelize = require('sequelize');
const db = require('./index.js');

const AuthsModel = db.define('auths',{
    iUserId:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    vUsername:{
        type:Sequelize.STRING
    },
    vEmail:{
        type:Sequelize.STRING
    },
    vAddress:{
        type:Sequelize.STRING
    },
    vCity:{
        type:Sequelize.STRING
    },
    vPincode:{
        type:Sequelize.STRING
    },

    vOTP:{
        type:Sequelize.INTEGER
    } ,
    vPassword:{
        type:Sequelize.STRING
    }, 
},{
    createdAt:false,
    updatedAt:false,
    freezeTableName:true,   
});

module.exports = AuthsModel