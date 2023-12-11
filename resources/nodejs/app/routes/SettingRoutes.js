module.exports = app =>{
    const SettingController = require("../controller/SettingController.js");
    const router = require("express").Router();

    router.post("/getSettingDataById",SettingController.FindIdData)
    router.post("/updateSettingData",SettingController.UpdateData)
    
    app.use('/api/setting/',router)
}