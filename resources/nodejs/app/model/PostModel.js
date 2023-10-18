const Sequelize = require('sequelize');
const db = require('./index.js');



const PostModel = db.define('posts',{
    iPostId:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    vName:{
        type:Sequelize.STRING
    },
    vTitle:{
        type:Sequelize.STRING
    },
    vContent:{
        type:Sequelize.STRING
    },
    iUserId:{
        type:Sequelize.INTEGER
    }
},{
    createdAt:false,
    updatedAt:false,
    freezeTableName:true
});
    PostModel.getAllPostData=(req)=>{
        return PostModel.findAll({})
    }
   
  

module.exports = PostModel