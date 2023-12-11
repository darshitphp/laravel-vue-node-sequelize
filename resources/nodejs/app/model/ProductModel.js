const Sequelize = require('sequelize');
const db = require('./index.js')
const CategoryModel = require('./CategoryModel');
const ProductModel = db.define('products',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    category_id:{
        type:Sequelize.INTEGER,
    },
    status:{
        type: Sequelize.ENUM('enable','disable'),
    },
    title:{
        type:Sequelize.STRING
    },
    short_description:{
        type:Sequelize.STRING
    },
    images:{
        type:Sequelize.TEXT
    },
    slug:{
        type:Sequelize.STRING
    },
    unique_id:{
        type:Sequelize.STRING
    },
    layout:{
        type:Sequelize.STRING
    },
},{
    createdAt:false,
    updatedAt:false   
});
//get all tags data
ProductModel.getAllProductData = (req)=>{
    return ProductModel.findAll({})
}

//get by id tags data
ProductModel.getIdProductData = (req) => {
  return ProductModel.findOne({
    where: { id: req.body.id }
  });
};

ProductModel.getProductByIdData = (id) => {
  return ProductModel.findOne({
    where: { id: id }
  });  
}

//insert into tag table
ProductModel.addProductData = (req)=>{
    return ProductModel.create(req.body)
}

ProductModel.updateProductData = (req,updateId)=>{
    return ProductModel.update(req.body, { where: { id: updateId } })
}

//deleted into tag table
ProductModel.deleteProductData = (req)=>{
    return ProductModel.destroy({
        where: { id: req.body.id }
    });
}
module.exports = ProductModel

