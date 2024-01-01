module.exports = app =>{
    const PostController = require("../controller/PostController.js");
    var router = require("express").Router()
    const myMiddleware = require('../middleware/MyMiddleware.js'); 

    router.use(myMiddleware);

    router.post("/getAllPost",PostController.findAllPostData);
    router.post("/getAllTagPost",PostController.findAllTagPostData);

    app.use('/api/post',router)
}