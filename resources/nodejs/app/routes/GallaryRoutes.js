module.exports = app =>{
    const GallaryController = require("../controller/GallaryController.js");
    const router = require("express").Router();
    const myMiddleware = require('../middleware/MyMiddleware.js'); 

    router.use(myMiddleware);

    router.post("/gallaryData",GallaryController.FindAllData)
    router.post("/getGallaryDataById",GallaryController.FindIdData)
    router.post("/addGallaryData",GallaryController.AddData)
    router.post("/updateGallaryData",GallaryController.UpdateData)
    router.post("/UpdateAfterRemoveImgData",GallaryController.UpdateAfterRemoveImgData)
    router.post("/deleteGallaryData",GallaryController.DeleteData)
    
    app.use('/api/gallary/',router)
}