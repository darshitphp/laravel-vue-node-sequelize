module.exports = app =>{
    const PostController = require("../controller/PostController.js");
    var router = require("express").Router()

    router.post("/getAllPost",PostController.findAllPostData);
    router.post("/getAllTagPost",PostController.findAllTagPostData);

    app.use('/api/post',router)
}