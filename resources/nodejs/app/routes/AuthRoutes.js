module.exports = app =>{
    const AuthController = require("../controller/AuthController.js");
    var router = require("express").Router()
    
    router.post("/authUser",AuthController.create_users_auth);

    
    app.use("/api/auth",router)
    
    }