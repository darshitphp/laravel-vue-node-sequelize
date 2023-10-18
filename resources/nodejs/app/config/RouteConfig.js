module.exports = app =>{
    require("../routes/UserRoutes.js")(app)
    require("../routes/PostRoutes.js")(app)
    require("../routes/TagRoutes.js")(app)
    require("../routes/PostTagRoutes.js")(app)
    require("../routes/AuthRoutes.js")(app)
}