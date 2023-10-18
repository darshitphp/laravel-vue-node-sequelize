module.exports = app =>{
    const TagController = require("../controller/TagController.js");
    const router = require("express").Router();

    router.post("/tagData",TagController.FindAllData)
    router.post("/getTagDataById",TagController.FindIdData)
    router.post("/addTagData",TagController.AddData)
    router.post("/updateTagData",TagController.UpdateData)
    router.post("/deleteTagData",TagController.DeleteData)
    
    app.use('/api/tags/',router)
}