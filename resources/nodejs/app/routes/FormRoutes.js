module.exports = app =>{
    const FormController = require("../controller/FormController.js");
    const router = require("express").Router();
    const myMiddleware = require('../middleware/MyMiddleware.js'); 

    router.use(myMiddleware);

    router.post("/formData",FormController.FindAllData)
    router.post("/getFormDataById",FormController.FindIdData)
    router.post("/addFormData",FormController.AddData)
    router.post("/updateFormData",FormController.UpdateData)
    router.post("/deleteFormData",FormController.DeleteData)
    
    app.use('/api/form/',router)
}