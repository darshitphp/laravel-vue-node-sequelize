module.exports = app =>{
    const HeaderController = require("../controller/HeaderController.js");
    const router = require("express").Router();
    const myMiddleware = require('../middleware/MyMiddleware.js'); 

    router.use(myMiddleware);

    router.post("/headerData",HeaderController.FindAllData)
    router.post("/getHeaderDataById",HeaderController.FindIdData)
    router.post("/addHeaderData",HeaderController.AddData)
    router.post("/socialImageUpload",HeaderController.socialImageUpload)
    router.post("/headerLogoUpload",HeaderController.headerLogoUpload)
    router.post("/updateHeaderData",HeaderController.UpdateData)
    router.post("/deleteHeaderData",HeaderController.DeleteData)
    
    app.use('/api/header/',router)
}