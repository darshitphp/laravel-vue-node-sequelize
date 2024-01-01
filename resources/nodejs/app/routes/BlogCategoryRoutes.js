module.exports = app =>{
    const BlogCategoryController = require("../controller/BlogCategoryController.js");
    const router = require("express").Router();
    const myMiddleware = require('../middleware/MyMiddleware.js'); 

    router.use(myMiddleware);

    router.post("/blogCategoryData",BlogCategoryController.FindAllData)
    router.post("/getBlogCategoryDataById",BlogCategoryController.FindIdData)
    router.post("/addBlogCategoryData",BlogCategoryController.AddData)
    router.post("/updateBlogCategoryData",BlogCategoryController.UpdateData)
    router.post("/deleteBlogCategoryData",BlogCategoryController.DeleteData)
    
    app.use('/api/blogCategory/',router)
}