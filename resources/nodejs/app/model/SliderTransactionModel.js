const Sequelize = require('sequelize');
const db = require('./index.js');
const SliderModel = require('./SliderModel');

const SliderTransactionModel = db.define('slider_transactions',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    slider_id:{
        type:Sequelize.INTEGER,
    },
    slider_image:{
        type:Sequelize.STRING
    },
    content:{
        type:Sequelize.TEXT,
        length: 'long', // Use the 'long' option for longer text
    },
    status:{
        type:Sequelize.ENUM('active','inactive')
    },
},{
    tableName: 'slider_transactions',
    createdAt:false,
    updatedAt:false
});

//get all tags data
SliderTransactionModel.getAllSliderTransactionData = (req)=>{
    return SliderTransactionModel.findAll({})
}

//get by id tags data
SliderTransactionModel.getIdSliderTransactionData = (req) => {
  return SliderTransactionModel.findOne({
    where: { id: req.body.id }
  });
};

//get by id tags data
SliderTransactionModel.getBySliderIdTransactionData = (req) => {
  return SliderTransactionModel.findAll({
    where: { slider_id: req }
  });
};

//insert into tag table
SliderTransactionModel.addSliderTransactionData = (req) => {
    // Convert the array of arrays to an array of objects
    const transactionArray = req.map(innerArray => {
      const obj = {};
      innerArray.forEach(([key, value]) => {
        obj[key] = value;
      });
      return obj;
    });
    
    var resId = null;
    for (var i = transactionArray.length - 1; i >= 0; i--) {
        resId = SliderTransactionModel.create(transactionArray[i])
    }
    return resId;
};

//insert into tag table
SliderTransactionModel.updateSliderAddTransactionData = (req) => {
    // Convert the array of arrays to an array of objects
    const transactions = req.map((transactionArray) => {
      const transactionObject = {};
      transactionArray.forEach(([key, value]) => {
        transactionObject[key] = value;
      });
      return transactionObject;
    });    // Use bulkCreate to insert multiple records
    console.log(transactions);
    return SliderTransactionModel.bulkCreate(transactions)
};

SliderTransactionModel.updateSliderTransactionData = (req,updateId)=>{
    return SliderTransactionModel.update(req.body, { where: { id: updateId } })
}

//deleted from Footer Transaction table
SliderTransactionModel.deleteSliderTransactionDataByFooterId = (req)=>{
    return SliderTransactionModel.destroy({
        where: { slider_id: req }
    });
}

//deleted into footer transaction table
SliderTransactionModel.deleteSliderTransactionData = (req)=>{
    return SliderTransactionModel.destroy({
        where: { id: req.body.id }
    });
}

module.exports = SliderTransactionModel;