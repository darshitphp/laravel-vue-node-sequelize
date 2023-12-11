const Sequelize = require('sequelize');
const db = require('./index.js')
// const FooterModel = require('./FooterModel');
const PageModel = db.define('pages',{
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
    title:{
        type:Sequelize.STRING
    },
    meta_title:{
        type:Sequelize.STRING
    },
    meta_data:{
        type:Sequelize.TEXT,
        length: 'long', // Use the 'long' option for longer text
    },
    meta_keyword:{
        type:Sequelize.TEXT,
        length: 'long', // Use the 'long' option for longer text
    },
    meta_description:{
        type:Sequelize.TEXT,
        length: 'long', // Use the 'long' option for longer text
    },
    custom_js:{
        type:Sequelize.TEXT,
        length: 'long', // Use the 'long' option for longer text
    },
    custom_css:{
        type:Sequelize.TEXT,
        length: 'long', // Use the 'long' option for longer text
    },
    layout:{
        type:Sequelize.STRING
    },
    left_layout_content:{
        type:Sequelize.STRING
    },
    right_layout_content:{
        type:Sequelize.STRING
    },
},{
    createdAt:false,
    updatedAt:false   
});

//get all tags data
PageModel.getAllPageData = (req)=>{
    return PageModel.findAll({})
}

//get by id tags data
PageModel.getIdPageData = (req) => {
  return PageModel.findOne({
    where: { id: req.body.id }
  });
};

//insert into tag table
PageModel.addPageData = (req)=>{
    return PageModel.create(req.body)
}

PageModel.updatePageData = (req,updateId)=>{
    return PageModel.update(req.body, { where: { id: updateId } })
}

//deleted into tag table
PageModel.deletePageData = (req)=>{
    return PageModel.destroy({
        where: { id: req.body.id }
    });
}

// PageModel.associate = function(models) {
//   PageModel.hasMany(models.FooterTransactionModel, { foreignKey: 'page_id', as: 'footerTransactions', });
// };
module.exports = PageModel

