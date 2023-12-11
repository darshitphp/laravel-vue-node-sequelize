const Sequelize = require('sequelize');
const db = require('./index.js')
// const FooterModel = require('./FooterModel');
const PopupModel = db.define('popups',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:Sequelize.STRING
    },
    status:{
        type:Sequelize.ENUM('enable','disable')
    },
    start_date:{
        type:Sequelize.DATEONLY
    },
    end_date:{
        type:Sequelize.DATEONLY
    },
    rules:{
        type:Sequelize.TEXT
    },
    content:{
        type:Sequelize.TEXT
    },
    custom_css:{
        type:Sequelize.TEXT
    },
    custom_js:{
        type:Sequelize.TEXT
    },
    pages:{
        type:Sequelize.TEXT
    },
    timer:{
        type:Sequelize.INTEGER
    }
},{
    createdAt:false,
    updatedAt:false   
});

//get all tags data
PopupModel.getAllPopupData = (req)=>{
    return PopupModel.findAll({})
}

//get by id tags data
PopupModel.getIdPopupData = (req) => {
  return PopupModel.findOne({
    where: { id: req.body.id }
  });
};

//insert into tag table
PopupModel.addPopupData = (req)=>{
    return PopupModel.create(req.body)
}

PopupModel.updatePopupData = (req,updateId)=>{
    return PopupModel.update(req.body, { where: { id: updateId } })
}

//deleted into tag table
PopupModel.deletePopupData = (req)=>{
    return PopupModel.destroy({
        where: { id: req.body.id }
    });
}

module.exports = PopupModel

