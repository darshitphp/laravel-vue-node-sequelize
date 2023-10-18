module.exports = app =>{
const UserController = require("../controller/UserController");
var router = require("express").Router()

router.post("/test",UserController.findAllUserData);
router.post("/postanduser",UserController.findAllPostUserData);
router.post("/checkUser",UserController.checkForUserData)
router.post("/addUserData",UserController.addUserData)

app.use("/api/user",router)

}