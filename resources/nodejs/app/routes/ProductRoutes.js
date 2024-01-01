module.exports = app =>{
    const ProductController = require("../controller/ProductController.js");
    const router = require("express").Router();
    const myMiddleware = require('../middleware/MyMiddleware.js'); 

    router.use(myMiddleware);

    router.post("/productData",ProductController.FindAllData)
    router.post("/getProductDataById",ProductController.FindIdData)
    router.post("/addProductData",ProductController.AddData)
    router.post("/updateProductData",ProductController.UpdateData)
    router.post("/UpdateAfterRemoveImgData",ProductController.UpdateAfterRemoveImgData)
    router.post("/deleteProductData",ProductController.DeleteData)
    
    app.use('/api/product/',router)
}