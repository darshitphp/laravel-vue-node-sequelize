const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: 'password',
  database: 'mydatabase',
  logging: (query) => {
    console.log(query);
  }
});

module.exports ={
    HOST: "localhost",
    PORT:"3306",
    USER :"root",
    Password:"",
    DB:"darshit_nodejs",
    dialect:"mysql",
    logging: (query) => {
        console.log('Executing query:', query);
    },
    pool:{
        max : 5,
        min : 0,
        acquire:3000,
        idle:10000
    },
    sequelize
}
