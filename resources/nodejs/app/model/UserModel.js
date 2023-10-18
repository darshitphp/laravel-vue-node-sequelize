const Sequelize = require('sequelize');
const db = require('./index.js');
const PostModel = require('./PostModel.js');

const UserModel = db.define('user_details',{
    iUserId:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    vName:{
        type:Sequelize.STRING
    },
    vPassword:{
        type:Sequelize.STRING
    },
    iAge:{
        type:Sequelize.STRING
    },
    vCity:{
        type:Sequelize.STRING
    } ,
    vHobbies:{
        type:Sequelize.STRING
    }, 
    vFav_Food:{
        type:Sequelize.STRING
    },
    vEmail:{
        type:Sequelize.STRING
    },
    vGender:{
        type:Sequelize.STRING
    }
},{
    // paranoid:true,
    // deletedAt:"softDelete",
    createdAt:false,
    updatedAt:false,
    freezeTableName:true,   
});

UserModel.addUserData = (req)=>{
    return UserModel.create(req)
}

UserModel.checkForUserData = (req)=>{
    return UserModel.findAll({
        where: { 
            vEmail: req.body.vEmail,
        }
    }).then((result) => {
        return result[0].dataValues;
    });
}

UserModel.getAllUserData = (req)=>{
    return UserModel.findAll({})
    //---recover deleted data   return UserModel.findAll({paranoid:false}) in api

    // return UserModel.destroy({
    //     where:{iUserId:4}
    // })
    //----restore in db 
    // return UserModel.restore({
    //         where:{iUserId:4}
    //     })

}
UserModel.PostAndUserData = (req) =>{
    return UserModel.findAll({
        include:{
            model:PostModel,
            on: {
                'id': Sequelize.where(
                    Sequelize.col('user_details.iUserId'),
                    '=',
                    Sequelize.col('post.iUserId')
                )
            }
         }
    })
};
UserModel.hasOne(PostModel,{
    foreignKey:"iUserId"
})
// UserModel.belongsTo(PostModel,{
//     foreignKey:"iUserId"
// })
module.exports = UserModel;