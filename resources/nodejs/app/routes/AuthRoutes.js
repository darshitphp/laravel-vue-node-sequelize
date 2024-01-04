module.exports = app =>{
    const AuthController = require("../controller/AuthController.js");
    var router = require("express").Router()
    
    router.post("/login",AuthController.login);
    router.post("/update_user_password",AuthController.updateUserPassword);
    router.post("/update_user_data",AuthController.updateUserData);
    
    app.use("/api/auth",router)
}