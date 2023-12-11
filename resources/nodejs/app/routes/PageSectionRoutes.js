module.exports = app =>{
    const PageSectionController = require("../controller/PageSectionController.js");
    const router = require("express").Router();

    router.post("/pageSectionData",PageSectionController.FindAllData)
    router.post("/getPageSectionDataById",PageSectionController.FindIdData)
    router.post("/addPageSectionData",PageSectionController.AddData)
    router.post("/updatePageSectionData",PageSectionController.UpdateData)
    router.post("/deletePageSectionData",PageSectionController.DeleteData)
    
    app.use('/api/page_section/',router)
}