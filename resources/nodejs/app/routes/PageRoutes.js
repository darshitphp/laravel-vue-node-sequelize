module.exports = app =>{
    const PageController = require("../controller/PageController.js");
    const router = require("express").Router();
    const myMiddleware = require('../middleware/MyMiddleware.js'); 

    router.use(myMiddleware);
    router.post("/pageData",PageController.FindAllData)
    router.post("/getPageDataById",PageController.FindIdData)
    router.post("/addPageData",PageController.AddData)
    router.post("/updatePageData",PageController.UpdateData)
    router.post("/deletePageData",PageController.DeleteData)
    
    app.use('/api/page/',router)
}