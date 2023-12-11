const Sequelize = require('sequelize');
const db = require('./index.js');

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

//get by id tags data
FooterTransactionModel.getByFooterIdTransactionData = (req) => {
  return FooterTransactionModel.findAll({
    where: { footer_id: req }
  });
};

//insert into tag table
FooterTransactionModel.addFooterTransactionData = (req) => {
    // Convert the array of arrays to an array of objects
    const transactions = req.map((transactionArray) => {
      const transactionObject = {};
      transactionArray.forEach(([key, value]) => {
        transactionObject[key] = value;
      });
      return transactionObject;
    });    // Use bulkCreate to insert multiple records
    return FooterTransactionModel.bulkCreate(transactions)
};

FooterTransactionModel.updateFooterTransactionData = (req,updateId)=>{
    return FooterTransactionModel.update(req.body, { where: { id: updateId } })
}

//deleted from Footer Transaction table
FooterTransactionModel.deleteFooterTransactionDataByFooterId = (req)=>{
    return FooterTransactionModel.destroy({
        where: { footer_id: req }
    });
}

//deleted into footer transaction table
FooterTransactionModel.deleteFooterTransactionData = (req)=>{
    return FooterTransactionModel.destroy({
        where: { id: req.body.id }
    });
}

module.exports = FooterTransactionModel;