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
        type:Sequelize.STRING
    },
    meta_keyword:{
        type:Sequelize.STRING
    },
    meta_description:{
        type:Sequelize.STRING
    },
    body:{
        type:Sequelize.TEXT
    },
    custom_js:{
        type:Sequelize.TEXT
    },
    custom_css:{
        type:Sequelize.TEXT
    }
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
    console.log("req: "+req);
    console.log("updateId: "+updateId);
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

