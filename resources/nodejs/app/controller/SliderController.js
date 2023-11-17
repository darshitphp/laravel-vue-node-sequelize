const SliderModel = require('../model/SliderModel');

exports.FindAllData = (req, resp) => {
  SliderModel.getAllSliderData(req)
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
  SliderModel.getIdSliderData(req)
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
  var sliderImageArray = new Array();
  // Create the multer middleware to handle file uploads
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../../public/assets/img/slider_image'); // Destination folder for uploaded files
    },
    filename: function (req, file, cb) {
      sliderImageArray.push(time+'_'+file.originalname);
      cb(null, time+'_'+file.originalname);
    },
  });

  const upload = multer({ storage: storage }).array('slider_image[]');

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
        shortcode,
        content,
        options,
        start_from,
        end_to,
        status,
      } = req.body;

      // Access the uploaded files
      const files = req.files;
      sliderImageArray = JSON.stringify(sliderImageArray);
      
      req.body.slider_image = sliderImageArray;
      console.log(req);
      // Do something with the form data and uploaded files

      SliderModel.addSliderData(req)
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
  SliderModel.updateSliderData(req,req.body.id)
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
  var sliderImageArray = new Array();

  // Create the multer middleware to handle file uploads
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../../public/assets/img/slider_image'); // Destination folder for uploaded files
    },
    filename: function (req, file, cb) {
      sliderImageArray.push(time+'_'+file.originalname);
      cb(null, time+'_'+file.originalname);
    },
  });

  const upload = multer({ storage: storage }).array('slider_image[]');

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
        shortcode,
        content,
        options,
        start_from,
        end_to,
        status,
      } = req.body;

      //getting recently updated slider image json 
      SliderModel.getSliderByIdData(id)
      .then((result) => {
        const oldSliderImagesData = JSON.parse(result.dataValues.slider_image);
        const files = req.files;
        // sliderImageArray = JSON.stringify(sliderImageArray);
        sliderImageArray.forEach(function (value, i) {
          //concating both old json and new uploaded files json then merge both and updating to new one
          oldSliderImagesData.push(value);
        });
        
        req.body.slider_image = JSON.stringify(oldSliderImagesData);

        SliderModel.updateSliderData(req,req.body.id)
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
  SliderModel.deleteSliderData(req)
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