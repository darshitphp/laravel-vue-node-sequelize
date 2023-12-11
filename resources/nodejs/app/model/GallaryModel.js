const Sequelize = require('sequelize');
const db = require('./index.js')

const GallaryModel = db.define('gallaries',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    image:{
        type:Sequelize.STRING
    },
    alter:{
        type:Sequelize.STRING
    },
    custom_link:{
        type:Sequelize.STRING
    },
},{
    createdAt:false,
    updatedAt:false   
});
//get all tags data
GallaryModel.getAllGallaryData = (req)=>{
    return GallaryModel.findAll({})
}

//get by id tags data
GallaryModel.getIdGallaryData = (req) => {
    console.log(req);
  return GallaryModel.findOne({
    where: { id: req.body.id }
  });
};

GallaryModel.getGallaryByIdData = (id) => {
  return GallaryModel.findOne({
    where: { id: id }
  });  
}

//insert into tag table
GallaryModel.addGallaryData = (req)=>{
    console.log('in gallary add model')
    console.log(req);
    return GallaryModel.create(req)
}

GallaryModel.updateGallaryData = (req,updateId)=>{
    return GallaryModel.update(req.body, { where: { id: updateId } })
}

//deleted into tag table
GallaryModel.deleteGallaryData = (req)=>{
    return GallaryModel.destroy({
        where: { id: req.body.id }
    });
}
module.exports = GallaryModel

