module.exports = app =>{
    const CategoryController = require("../controller/CategoryController.js");
    const router = require("express").Router();
    const myMiddleware = require('../middleware/MyMiddleware.js'); 

    router.use(myMiddleware);

    router.post("/categoryData",CategoryController.FindAllData)
    router.post("/getCategoryDataById",CategoryController.FindIdData)
    router.post("/addCategoryData",CategoryController.AddData)
    router.post("/updateCategoryData",CategoryController.UpdateData)
    router.post("/deleteCategoryData",CategoryController.DeleteData)
    
    app.use('/api/category/',router)
}