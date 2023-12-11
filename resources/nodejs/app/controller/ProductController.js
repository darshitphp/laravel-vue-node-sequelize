const ProductModel = require('../model/ProductModel');

exports.FindAllData = (req, resp) => {
  ProductModel.getAllProductData(req)
    .then((result) => {
      resp.send({
        status: "success",
        code: "200",
        message: "All Data from Many to Many",
        data: result,
      });
    })
    .catch((error) => {
      resp.send({
        status: "error",
        code: "500",
        message: error,
      });
    });
};

exports.FindIdData = (req, resp) => {
  ProductModel.getIdProductData(req)
    .then((result) => {
      resp.send({
        status: "success",
        code: "200",
        message: "All Data from Many to Many",
        data: result,
      });
    })
    .catch((error) => {
      resp.send({
        status: "error",
        code: "500",
        message: error,
      });
    });
};

exports.AddData = (req, resp) => {
  const express = require('express');
  const multer = require('multer');
  const app = express();
  var today = new Date();
  var time = today.getFullYear() + '-' + (today.getMonth() + 1) + today.getDate() + '-' + today.getHours() + "-" + today.getMinutes() + "-" + today.getSeconds();
  var productImageArray = new Array();
  // Create the multer middleware to handle file uploads
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../../public/assets/img/product'); // Destination folder for uploaded files
    },
    filename: function (req, file, cb) {
      productImageArray.push(time+'_'+file.originalname);
      cb(null, time+'_'+file.originalname);
    },
  });

  const upload = multer({ storage: storage }).array('product_image[]');

    upload(req, resp, function (err) {
      if (err instanceof multer.MulterError) {
        // Handle multer errors
        console.log('Multer Error:', err);
        return resp.status(400).send('Error uploading files.');
      } else if (err) {
        // Handle other errors
        console.log('Error:', err);
        return resp.status(500).send('Internal server error.');
      }

      // Access the form data
      const {
        title,
        category_id,
        status,
        short_description,
        slug,
        unique_id,
        layout,
      } = req.body;
      
      // Access the uploaded files
      const files = req.files;
      productImageArray = JSON.stringify(productImageArray);
      req.body.images = productImageArray;
      console.log(req.body);
      // Do something with the form data and uploaded files

      ProductModel.addProductData(req)
      .then((result) => {
          resp.send({
              status: "success",
              code: "200",
              message: "your record has been inserted successfully.",
          });
      })
      .catch((error) => {
        resp.send({
          status: "error",
          code: "500",
          message: error,
        });
      });
    });

  
};

exports.UpdateAfterRemoveImgData = (req, resp) => {
  console.log(req.body);
  ProductModel.updateProductData(req,req.body.id)
  .then((result) => {
      resp.send({
          status: "success",
          code: "200",
          message: "your record has been updated successfully.",
      });
  })
  .catch((error) => {
    resp.send({
      status: "error",
      code: "500",
      message: error,
    });
  });
};

exports.UpdateData = (req, resp) => {
  const express = require('express');
  const multer = require('multer');
  const app = express();
  var today = new Date();
  var time = today.getFullYear() + '-' + (today.getMonth() + 1) + today.getDate() + '-' + today.getHours() + "-" + today.getMinutes() + "-" + today.getSeconds();
  var productImageArray = new Array();

  // Create the multer middleware to handle file uploads
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../../public/assets/img/product'); // Destination folder for uploaded files
    },
    filename: function (req, file, cb) {
      productImageArray.push(time+'_'+file.originalname);
      cb(null, time+'_'+file.originalname);
    },
  });

  const upload = multer({ storage: storage }).array('product_image[]');

    upload(req, resp, function (err) {
      if (err instanceof multer.MulterError) {
        // Handle multer errors
        console.log('Multer Error:', err);
        return resp.status(400).send('Error uploading files.');
      } else if (err) {
        // Handle other errors
        console.log('Error:', err);
        return resp.status(500).send('Internal server error.');
      }

      // Access the form data
      const {
        id,
        title,
        category_id,
        status,
        short_description,
        slug,
        unique_id,
        layout,
      } = req.body;

      //getting recently updated slider image json 
      ProductModel.getProductByIdData(id)
      .then((result) => {
        const oldSliderImagesData = JSON.parse(result.dataValues.images);
        const files = req.files;
        // productImageArray = JSON.stringify(productImageArray);
        console.log(productImageArray);
        productImageArray.forEach(function (value, i) {
          //concating both old json and new uploaded files json then merge both and updating to new one
          oldSliderImagesData.push(value);
        });
        req.body.images = JSON.stringify(oldSliderImagesData);
        console.log(req.body);
        ProductModel.updateProductData(req,req.body.id)
        .then((result) => {
            resp.send({
                status: "success",
                code: "200",
                message: "your record has been updated successfully.",
            });
        })
        .catch((error) => {
          resp.send({
            status: "error",
            code: "500",
            message: error,
          });
        });

      });

    });
};

exports.DeleteData = (req, resp) => {
  ProductModel.deleteProductData(req)
    .then((result) => {
        resp.send({
            status: "success",
            code: "200",
            message: "your record has been deleted successfully.",
        });
    })
    .catch((error) => {
      resp.send({
        status: "error",
        code: "500",
        message: error,
      });
    });
};