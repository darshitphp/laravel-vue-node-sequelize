module.exports = app =>{
    const HeaderController = require("../controller/HeaderController.js");
    const router = require("express").Router();

    router.post("/headerData",HeaderController.FindAllData)
    router.post("/getHeaderDataById",HeaderController.FindIdData)
    router.post("/addHeaderData",HeaderController.AddData)
    router.post("/updateHeaderData",HeaderController.UpdateData)
    router.post("/deleteHeaderData",HeaderController.DeleteData)
    
    app.use('/api/header/',router)
}