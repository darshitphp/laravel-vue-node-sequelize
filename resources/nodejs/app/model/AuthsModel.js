const Sequelize = require('sequelize');
const db = require('./index.js');

const AuthsModel = db.define('users',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    user_name:{
        type:Sequelize.STRING
    },
    email:{
        type:Sequelize.STRING
    },
    password:{
        type:Sequelize.STRING
    },
    gender:{
        type:Sequelize.STRING
    },
    address:{
        type:Sequelize.STRING
    },
    number:{
        type:Sequelize.INTEGER
    } ,
    city:{
        type:Sequelize.STRING
    }, 
    ZIP:{
        type:Sequelize.STRING
    },
    email_verified_at:{
        type:Sequelize.STRING
    },
    remember_token:{
        type:Sequelize.STRING
    },
},{
    createdAt:false,
    updatedAt:false,
    tableName: 'users',
    // freezeTableName:true,   
});

AuthsModel.checkForUserData = (req)=>{
    return AuthsModel.findAll({
        where: { 
            email: req.body.email,
        }
    }).then((result) => {
        console.log(result);
        return result[0].dataValues;
    });
}

AuthsModel.updateUserPassword = (req,email)=>{
    return AuthsModel.update(req.body, { where: { email: email } })
}

module.exports = AuthsModel