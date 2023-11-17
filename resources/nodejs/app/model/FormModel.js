const Sequelize = require('sequelize');
const db = require('./index.js')

const FormModel = db.define('forms',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:Sequelize.STRING
    },
    title:{
        type:Sequelize.STRING
    },
    slug:{
        type:Sequelize.STRING
    },
    action_url:{
        type:Sequelize.STRING
    },
    email_adds:{
        type:Sequelize.STRING
    },
    submit_type:{
        type:Sequelize.ENUM('save_entry','send_email')
    },
    content:{
        type:Sequelize.TEXT,
        length: 'long', // Use the 'long' option for longer text
    },
    fields:{
        type:Sequelize.TEXT,
        length: 'long', // Use the 'long' option for longer text
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
FormModel.getAllFormData = (req)=>{
    return FormModel.findAll({})
}

//get by id tags data
FormModel.getIdFormData = (req) => {
  return FormModel.findOne({
    where: { id: req.body.id }
  });
};

//insert into tag table
FormModel.addFormData = (req)=>{
    return FormModel.create(req.body)
}

FormModel.updateFormData = (req,updateId)=>{
    return FormModel.update(req.body, { where: { id: updateId } })
}

//deleted into tag table
FormModel.deleteFormData = (req)=>{
    return FormModel.destroy({
        where: { id: req.body.id }
    });
}
module.exports = FormModel

