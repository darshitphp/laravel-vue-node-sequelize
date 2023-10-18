const Sequelize = require('sequelize');
const db = require('./index.js')

const TagModel = db.define('tags',{
    iTagId:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    vName:{
        type:Sequelize.STRING
    }
},{
    createdAt:false,
    updatedAt:false   
});
//get all tags data
TagModel.getAllTagData = (req)=>{
    return TagModel.findAll({})
}

//get by id tags data
TagModel.getIdTagData = (req) => {
  return TagModel.findAll({
    where: { iTagId: req.body.iTagId }
  });
};

//insert into tag table
TagModel.addTagData = (req)=>{
    return TagModel.create(req.body)
}

TagModel.updateTagData = (req,updateId)=>{
    console.log("req: "+req);
    console.log("updateId: "+updateId);
    return TagModel.update(req.body, { where: { iTagId: updateId } })
}

//deleted into tag table
TagModel.deleteTagData = (req)=>{
    return TagModel.destroy({
        where: { iTagId: req.body.iTagId }
    });
}
module.exports = TagModel

