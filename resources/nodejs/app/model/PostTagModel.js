const Sequelize = require('sequelize');
const db = require('./index.js');
const PostModel = require('./PostModel.js');
const TagModel = require('./TagModel.js');
const UserModel = require('./UserModel.js');

const PostTagModel = db.define('post_tags',{
    iPostTagId:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    iPostId:{
        type:Sequelize.INTEGER
    },
    iTagId:{
        type:Sequelize.INTEGER
    }
},
{
    createdAt:false,
    updatedAt:false,
    freezeTableName:true

}
);

    PostTagModel.getAllPostTagData=(req) =>{
        return PostTagModel.findAll({})
    }

    PostTagModel.getAllTagPostData = (req)=>{
        return PostModel.findAll({
            include:[
            {
                model:TagModel,
                through:{
                    attributes:[]
                }
            }, {
                model: UserModel
            }],
            logging: false //,where :{iPostId:2}
     
        })
        
    }
    PostModel.belongsToMany(TagModel, { through:"post_tags" , foreignKey: 'iPostId' })
    TagModel.belongsToMany(PostModel, {  through: "post_tags",foreignKey: 'iTagId' })
    


    PostModel.belongsTo(UserModel,{
        foreignKey: 'iUserId'
    })
module.exports = PostTagModel