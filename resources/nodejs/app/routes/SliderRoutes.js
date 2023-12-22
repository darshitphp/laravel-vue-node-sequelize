module.exports = app =>{
    const SliderController = require("../controller/SliderController.js");
    const router = require("express").Router();

    router.post("/sliderData",SliderController.FindAllData)
    router.post("/getSliderDataById",SliderController.FindIdData)
    router.post("/addSliderData",SliderController.AddData)
    router.post("/updateSliderData",SliderController.UpdateData)
    router.post("/sliderImageUpload",SliderController.SliderImageUpload)
    router.post("/removeSliderImgTransactionData",SliderController.removeSliderImgTransactionData)
    router.post("/deleteSliderData",SliderController.DeleteData)
    
    app.use('/api/slider/',router)
}