module.exports = app =>{
    const PopupController = require("../controller/PopupController.js");
    const router = require("express").Router();
    const myMiddleware = require('../middleware/MyMiddleware.js'); 

    router.use(myMiddleware);

    router.post("/popupData",PopupController.FindAllData)
    router.post("/getPopupDataById",PopupController.FindIdData)
    router.post("/addPopupData",PopupController.AddData)
    router.post("/updatePopupData",PopupController.UpdateData)
    router.post("/deletePopupData",PopupController.DeleteData)
    
    app.use('/api/popup/',router)
}