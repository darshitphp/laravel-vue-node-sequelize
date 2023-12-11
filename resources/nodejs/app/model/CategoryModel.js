const Sequelize = require('sequelize');
const db = require('./index.js')

const CategoryModel = db.define('categories',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:Sequelize.STRING
    },
    status:{
        type: Sequelize.ENUM('enable','disable'),
    },
    include:{
        type: Sequelize.ENUM('yes','no'),
    },
    content:{
        type:Sequelize.TEXT
    },
    banner_image:{
        type:Sequelize.STRING
    },
    slug:{
        type:Sequelize.STRING
    },
},{
    createdAt:false,
    updatedAt:false   
});
//get all tags data
CategoryModel.getAllCategoryData = (req)=>{
    return CategoryModel.findAll({})
}

//get by id tags data
CategoryModel.getIdCategoryData = (req) => {
  return CategoryModel.findOne({
    where: { id: req.body.id }
  });
};

CategoryModel.getCategoryByIdData = (id) => {
  return CategoryModel.findOne({
    where: { id: id }
  });  
}

//insert into tag table
CategoryModel.addCategoryData = (req)=>{
    return CategoryModel.create(req.body)
}

CategoryModel.updateCategoryData = (req,updateId)=>{
    console.log(req.body);
    console.log(updateId);
    return CategoryModel.update(req.body, { where: { id: updateId } })
}

//deleted into tag table
CategoryModel.deleteCategoryData = (req)=>{
    return CategoryModel.destroy({
        where: { id: req.body.id }
    });
}
module.exports = CategoryModel

