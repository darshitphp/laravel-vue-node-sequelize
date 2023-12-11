const Sequelize = require('sequelize');
const db = require('./index.js');
const BlogCategoryModel = require('./BlogCategoryModel');
const { Op } = require('sequelize');
const BlogModel = db.define('blogs',{
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
    content:{
        type:Sequelize.TEXT
    },
    tags:{
        type:Sequelize.STRING
    },
    comments:{
        type:Sequelize.STRING
    },
    blog_status:{
        type:Sequelize.STRING
    },
    author:{
        type:Sequelize.STRING
    },
    category_id:{
        type:Sequelize.INTEGER,
    },
},{
    createdAt:false,
    updatedAt:false   
});

//get all tags data
BlogModel.getAllBlogData = (req)=>{
    return BlogModel.findAll({
        include: {
            model: BlogCategoryModel,
            as: 'blogCategory',
        }
    })
}

BlogModel.getAllParentCategoryData = (req)=>{
    return BlogModel.findAll({
        where: {
            parent_id: {
                [Op.ne]: null
            }
        },
    })
}

//get by id tags data
BlogModel.getIdBlogData = (req) => {
  return BlogModel.findOne({
    where: { id: req.body.id },
  });
};

//insert into tag table
BlogModel.addBlogData = (req)=>{
    console.log(req.body);
    return BlogModel.create(req.body)
}

BlogModel.updateBlogData = (req,updateId)=>{
    return BlogModel.update(req.body, { where: { id: updateId } })
}

//deleted into tag table
BlogModel.deleteBlogData = (req)=>{
    return BlogModel.destroy({
        where: { id: req.body.id }
    });
}

BlogModel.belongsTo(BlogCategoryModel, { foreignKey: 'category_id', as: 'blogCategory' });

// BlogModel.associate = function(models) {
//   BlogModel.hasMany(models.FooterTransactionModel, { foreignKey: 'Blog_id', as: 'footerTransactions', });
// };
module.exports = BlogModel

