const Sequelize = require('sequelize');
const db = require('./index.js')

const PageSectionModel = db.define('page_sections',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    page_id:{
        type:Sequelize.INTEGER,
    },
    slider_id:{
        type:Sequelize.INTEGER,
    },
    form_id:{
        type:Sequelize.INTEGER,
    },
    order:{
        type:Sequelize.INTEGER
    },
    content:{
        type:Sequelize.TEXT,
        length: 'long', // Use the 'long' option for longer text
    },
},{
    createdAt:false,
    updatedAt:false   
});
//get all tags data
PageSectionModel.getAllPageSectionData = (req)=>{
    return PageSectionModel.findAll({})
}

//get by id tags data
PageSectionModel.getIdPageSectionData = (req) => {
  return PageSectionModel.findOne({
    where: { id: req.body.id }
  });
};

PageSectionModel.getPageSectionByIdData = (id) => {
  return PageSectionModel.findOne({
    where: { id: id }
  });  
}

//get by id tags data
PageSectionModel.getByPageIdTransactionData = (req) => {
  return PageSectionModel.findAll({
    where: { page_id: req }
  });
};

//insert into tag table
PageSectionModel.addPageSectionData = (req)=>{
    console.log(req);
    // Convert the array of arrays to an array of objects
    const transactions = req.map((sectionArray) => {
      const transactionObject = {};
      sectionArray.forEach(([key, value]) => {
        transactionObject[key] = value;
      });
      return transactionObject;
    });
    
    console.log(transactions);
    // Use bulkCreate to insert multiple records
    return PageSectionModel.bulkCreate(transactions)
}

PageSectionModel.updatePageSectionData = (req,updateId)=>{
    return PageSectionModel.update(req.body, { where: { id: updateId } })
}

//deleted from Footer Transaction table
PageSectionModel.deletePageSectionByPageId = (req)=>{
    return PageSectionModel.destroy({
        where: { page_id: req }
    });
}

//deleted into tag table
PageSectionModel.deletePageSectionData = (req)=>{
    return PageSectionModel.destroy({
        where: { id: req.body.id }
    });
}
module.exports = PageSectionModel