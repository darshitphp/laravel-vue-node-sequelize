const Sequelize = require('sequelize');
const db = require('./index.js');
const SettingModel = db.define('settings',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    title:{
        type:Sequelize.STRING
    },
    name:{
        type:Sequelize.STRING
    },
    url:{
        type:Sequelize.STRING
    },
    contact_info:{
        type:Sequelize.STRING
    },
    country:{
        type:Sequelize.STRING
    },
    state:{
        type:Sequelize.STRING
    },
    timezone:{
        type:Sequelize.STRING
    },
    recpatcha_status:{
        type:Sequelize.STRING
    },
    recpatcha_private:{
        type:Sequelize.STRING
    },
    recpatcha_public:{
        type:Sequelize.STRING
    },
    recpatcha_type:{
        type:Sequelize.ENUM('v2_robot_checkbox','v2_invisible','v3_invisible')
    },
    smtp_host:{
        type:Sequelize.STRING
    },
    smtp_port:{
        type:Sequelize.INTEGER,
    },
    smtp_secure_type:{
        type:Sequelize.ENUM('SSL','TLS')
    },
    username:{
        type:Sequelize.STRING
    },
    password:{
        type:Sequelize.STRING
    },
},{
    createdAt:false,
    updatedAt:false   
});

//get by id tags data
SettingModel.getIdSettingData = (req) => {
  return SettingModel.findOne({
    where: { id: 1 },
  });
};

SettingModel.updateSettingData = (req,updateId)=>{
    return SettingModel.update(req.body, { where: { id: updateId } })
}

module.exports = SettingModel

