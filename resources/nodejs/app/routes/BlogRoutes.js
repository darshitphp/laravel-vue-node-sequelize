module.exports = app =>{
    const BlogController = require("../controller/BlogController.js");
    const router = require("express").Router();
    const myMiddleware = require('../middleware/MyMiddleware.js'); 

    router.use(myMiddleware);

    router.post("/blogData",BlogController.FindAllData)
    router.post("/getBlogDataById",BlogController.FindIdData)
    router.post("/addBlogData",BlogController.AddData)
    router.post("/updateBlogData",BlogController.UpdateData)
    router.post("/deleteBlogData",BlogController.DeleteData)
    
    app.use('/api/blog/',router)
}