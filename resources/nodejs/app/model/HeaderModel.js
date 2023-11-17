const Sequelize = require('sequelize');
const db = require('./index.js')

const HeaderModel = db.define('headers',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    title:{
        type:Sequelize.STRING
    },
    content:{
        type:Sequelize.TEXT,
        length: 'long', // Use the 'long' option for longer text
    },
    logo_img:{
        type:Sequelize.STRING
    },
    position:{
        type:Sequelize.ENUM('left','center','right')
    },
    social_links:{
        type:Sequelize.TEXT,
        length: 'long', // Use the 'long' option for longer text
    }
},{
    createdAt:false,
    updatedAt:false
});
//get all tags data
HeaderModel.getAllHeaderData = (req)=>{
    return HeaderModel.findAll({})
}

//get by id tags data
HeaderModel.getIdHeaderData = (req) => {
  return HeaderModel.findOne({
    where: { id: req.body.id }
  });
};

//insert into tag table
HeaderModel.addHeaderData = (req)=>{
    const updatedArray = [];
    for (let i = 0; i < req.body.length; i++) {
      const { social_image, social_title, social_link, ...rest } = req.body[i];
      updatedArray.push(rest);
    }
    return HeaderModel.create(req.body)
}

HeaderModel.updateHeaderData = (req,updateId)=>{
    return HeaderModel.update(req.body, { where: { id: updateId } })
}

//deleted into tag table
HeaderModel.deleteHeaderData = (req)=>{
    return HeaderModel.destroy({
        where: { id: req.body.id }
    });
}
module.exports = HeaderModel

