const Sequelize = require('sequelize');
const db = require('./index.js');
const { Op } = require('sequelize');
const BlogCategoryModel = db.define('blog_categories',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:Sequelize.STRING
    },
    slug:{
        type:Sequelize.STRING
    },
    parent_id:{
        type:Sequelize.INTEGER,
    },
    description:{
        type:Sequelize.TEXT
    },
},{
    createdAt:false,
    updatedAt:false   
});

//get all tags data
BlogCategoryModel.getAllBlogCategoryData = (req)=>{
    const whereCondition = req.body.id ? { id: { [Op.ne]: req.body.id } } : {};

    return BlogCategoryModel.findAll({
        where: whereCondition,
    });
}

BlogCategoryModel.getAllParentCategoryData = (req)=>{
    return BlogCategoryModel.findAll({
        where: {
            parent_id: {
                [Op.ne]: null
            }
        },
    })
}

//get by id tags data
BlogCategoryModel.getIdBlogCategoryData = (req) => {
  return BlogCategoryModel.findOne({
    where: { id: req.body.id }
  });
};

//insert into tag table
BlogCategoryModel.addBlogCategoryData = (req)=>{
    return BlogCategoryModel.create(req.body)
}

BlogCategoryModel.updateBlogCategoryData = (req,updateId)=>{
    return BlogCategoryModel.update(req.body, { where: { id: updateId } })
}

//deleted into tag table
BlogCategoryModel.deleteBlogCategoryData = (req)=>{
    return BlogCategoryModel.destroy({
        where: { id: req.body.id }
    });
}

// BlogCategoryModel.associate = function(models) {
//   BlogCategoryModel.hasMany(models.FooterTransactionModel, { foreignKey: 'BlogCategory_id', as: 'footerTransactions', });
// };
module.exports = BlogCategoryModel

