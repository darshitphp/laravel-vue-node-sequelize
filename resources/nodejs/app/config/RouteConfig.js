module.exports = app =>{
    require("../routes/UserRoutes.js")(app)
    require("../routes/PostRoutes.js")(app)
    require("../routes/TagRoutes.js")(app)
    require("../routes/PostTagRoutes.js")(app)
    require("../routes/AuthRoutes.js")(app)
    require("../routes/PageRoutes.js")(app)
    require("../routes/SliderRoutes.js")(app)
    require("../routes/FormRoutes.js")(app)
    require("../routes/HeaderRoutes.js")(app)
    require("../routes/FooterRoutes.js")(app)
}