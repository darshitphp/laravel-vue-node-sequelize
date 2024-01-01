module.exports = app =>{
    const FooterController = require("../controller/FooterController.js");
    const router = require("express").Router();
    const myMiddleware = require('../middleware/MyMiddleware.js'); 

    router.use(myMiddleware);

    router.post("/footerData",FooterController.FindAllData)
    router.post("/getFooterDataById",FooterController.FindIdData)
    router.post("/addFooterData",FooterController.AddData)
    router.post("/updateFooterData",FooterController.UpdateData)
    router.post("/deleteFooterData",FooterController.DeleteData)
    
    app.use('/api/footer/',router)
}