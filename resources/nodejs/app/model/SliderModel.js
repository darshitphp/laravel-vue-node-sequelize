const Sequelize = require('sequelize');
const db = require('./index.js')

const SliderModel = db.define('slider',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    title:{
        type:Sequelize.STRING
    },
    shortcode:{
        type:Sequelize.STRING
    },
    start_from:{
        type:Sequelize.DATE
    },
    end_to:{
        type:Sequelize.DATE
    },
},{
    createdAt:false,
    updatedAt:false   
});
//get all tags data
SliderModel.getAllSliderData = (req)=>{
    return SliderModel.findAll({})
}

//get by id tags data
SliderModel.getIdSliderData = (req) => {
  return SliderModel.findOne({
    where: { id: req.body.id }
  });
};

SliderModel.getSliderByIdData = (id) => {
  return SliderModel.findOne({
    where: { id: id }
  });  
}

//insert into tag table
SliderModel.addSliderData = (req)=>{
    return SliderModel.create(req.body)
}

SliderModel.updateSliderData = (req,updateId)=>{
    return SliderModel.update(req.body, { where: { id: updateId } })
}

//deleted into tag table
SliderModel.deleteSliderData = (req)=>{
    return SliderModel.destroy({
        where: { id: req.body.id }
    });
}
module.exports = SliderModel

