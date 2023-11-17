const Sequelize = require('sequelize');
const db = require('./index.js');
const FooterModel = require('./FooterModel');

const FooterTransactionModel = db.define('footer_transaction',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    footer_id:{
        type:Sequelize.INTEGER,
    },
    page_id:{
        type:Sequelize.INTEGER,
    },
    content:{
        type:Sequelize.TEXT,
        length: 'long', // Use the 'long' option for longer text
    },
    custom_link:{
        type:Sequelize.STRING
    },
    status:{
        type:Sequelize.ENUM('active','inactive')
    },
},{
    tableName: 'footer_transaction',
    createdAt:false,
    updatedAt:false
});

//get all tags data
FooterTransactionModel.getAllFooterTransactionData = (req)=>{
    return FooterTransactionModel.findAll({})
}

//get by id tags data
FooterTransactionModel.getIdFooterTransactionData = (req) => {
  return FooterTransactionModel.findOne({
    where: { id: req.body.id }
  });
};

//insert into tag table
FooterTransactionModel.addFooterTransactionData = (req)=>{
    const updatedArray = [];
    for (let i = 0; i < req.body.length; i++) {
      const { social_image, social_title, social_link, ...rest } = req.body[i];
      updatedArray.push(rest);
    }
    return FooterTransactionModel.create(req.body)
}

FooterTransactionModel.updateFooterTransactionData = (req,updateId)=>{
    return FooterTransactionModel.update(req.body, { where: { id: updateId } })
}

//deleted into tag table
FooterTransactionModel.deleteFooterTransactionData = (req)=>{
    return FooterTransactionModel.destroy({
        where: { id: req.body.id }
    });
}

module.exports = FooterTransactionModel;