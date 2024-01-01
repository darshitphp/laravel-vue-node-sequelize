module.exports = app =>{
    const PageSectionController = require("../controller/PageSectionController.js");
    const router = require("express").Router();
    const myMiddleware = require('../middleware/MyMiddleware.js'); 

    router.use(myMiddleware);

    router.post("/pageSectionData",PageSectionController.FindAllData)
    router.post("/getPageSectionDataById",PageSectionController.FindIdData)
    router.post("/addPageSectionData",PageSectionController.AddData)
    router.post("/updatePageSectionData",PageSectionController.UpdateData)
    router.post("/deletePageSectionData",PageSectionController.DeleteData)
    
    app.use('/api/page_section/',router)
}