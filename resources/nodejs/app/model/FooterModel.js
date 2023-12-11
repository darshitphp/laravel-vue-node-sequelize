const Sequelize = require('sequelize');
const db = require('./index.js')
const FooterTransactionModel = require('./FooterTransactionModel');
const PageModel = require('./PageModel');
const { Op } = require('sequelize');
const FooterModel = db.define('footers',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    title:{
        type:Sequelize.STRING
    },
    status:{
        type:Sequelize.ENUM('active','inactive')
    },
},{
    createdAt:false,
    updatedAt:false
});

//get all tags data
FooterModel.getAllFooterData = (req) => {
    return FooterModel.findAll({
        include: {
            model: FooterTransactionModel,
            as: 'footerTransaction',
            include: [
            {
                model: PageModel,
                as: 'pageTransaction',
                where: {
                    id: {
                        [Op.ne]: null
                    }
                },
                required: false,
            }
          ]
        },
    logging: (sql) => {
      console.log('Last executed query:', sql);
    }
  });
};

//get by id tags data
FooterModel.getIdFooterData = (req) => {
  return FooterModel.findOne({
    where: { id: req.body.id }
  });
};

//insert into tag table
FooterModel.addFooterData = (req)=>{    
    return FooterModel.create(req.body)
}

FooterModel.updateFooterData = (req,updateId)=>{
    return FooterModel.update(req.body, { where: { id: updateId } })
}

//deleted into tag table
FooterModel.deleteFooterData = (req)=>{
    return FooterModel.destroy({
        where: { id: req.body.id }
    });
}

// FooterModel.belongsTo(FooterTransactionModel, { foreignKey: 'id' , as:'footerTransaction' });
FooterModel.hasMany(FooterTransactionModel, { foreignKey: 'footer_id', as: 'footerTransaction' });
FooterTransactionModel.belongsTo(PageModel, { foreignKey: 'page_id', as: 'pageTransaction' });

module.exports = FooterModel