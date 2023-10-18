module.exports = app =>{
    const PostTagController = require("../controller/PostTagController");
    const router = require("express").Router();

    router.post("/getAllPostTag",PostTagController.findAllPostTagData)
    router.post("/getAllTagPostData",PostTagController.findAllTagPostData)

    app.use('/api/postTag',router)
}