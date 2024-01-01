module.exports = app =>{
    const SettingController = require("../controller/SettingController.js");
    const router = require("express").Router();
    const myMiddleware = require('../middleware/MyMiddleware.js'); 

    router.use(myMiddleware);

    router.post("/getSettingDataById",SettingController.FindIdData)
    router.post("/updateSettingData",SettingController.UpdateData)
    
    app.use('/api/setting/',router)
}