const dbConfig = require('../config/DatabaseConfig');
const Sequelize = require('sequelize');

const db = new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.Password,{
    host:dbConfig.HOST,
    port:dbConfig.PORT,
    dialect:dbConfig.dialect,
    logging:false
});

db.authenticate()
.then(()=>{
    console.log("Database Connected")
}).catch((error)=>{
    console.log("error while connecting database",error)
})

module.exports = db