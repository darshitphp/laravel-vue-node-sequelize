const SliderModel = require('../model/SliderModel');
const SliderTransactionModel = require('../model/SliderTransactionModel');

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
  // Use Promise.all to wait for both promises to resolve
  Promise.all([
    SliderModel.getIdSliderData(req),
    SliderTransactionModel.getBySliderIdTransactionData(req.body.id), // Assuming id is passed as a parameter
  ])
  .then(([sliderData, SliderTransactionModel]) => {
    resp.send({
      status: "success",
      code: "200",
      message: "All Data from Many to Many",
      data: {
        slider: sliderData,
        sliderTransaction: SliderTransactionModel,
      },
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

  const upload = multer({ storage: storage }).array('slider_image_add[]');

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
      console.log(content);
      var content1 = content.split(',');
      var status1 = status.split(',');
      var transactionArray = [];
      for (var i = sliderImageArray.length - 1; i >= 0; i--) {
        transactionArray.push([
          ["slider_image", sliderImageArray[i]],
          ["content", content1[i]],
          ["status", status1[i]]
        ]);
      }
      
      SliderModel.addSliderData(req)
      .then((result) => {
        const lastInsertedId = result.dataValues.id;
        //for setting up inserted id in indexes
        for (var i = 0; i < transactionArray.length; i++) {
          transactionArray[i].push(["slider_id", lastInsertedId]);
        }
        console.log(transactionArray);
        SliderTransactionModel.addSliderTransactionData(transactionArray)
        .then((result1) => {
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

exports.removeSliderImgTransactionData = (req, resp) => {
  SliderTransactionModel.updateSliderTransactionData(req,req.body.id)
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
  const app = express();
  SliderModel.updateSliderData(req,req.body.id)
    .then((result) => {
      //for setting up inserted id in indexes
      for (var i = 0; i < req.body.transactionArray.length; i++) {
        req.body.transactionArray[i].push(["slider_id", req.body.id]);
      }
      SliderTransactionModel.deleteSliderTransactionDataByFooterId(req.body.id)
      .then((result1) => {
        SliderTransactionModel.updateSliderAddTransactionData(req.body.transactionArray)
        .then((result2) => {
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
      })
      .catch((error) => {
        resp.send({
          status: "error",
          code: "500",
          message: error,
        });
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

exports.SliderImageUpload = (req, resp) => {
  const express = require('express');
  const multer = require('multer');
  const app = express();
  var today = new Date();
  var time = today.getFullYear() + '-' + (today.getMonth() + 1) + today.getDate() + '-' + today.getHours() + "-" + today.getMinutes() + "-" + today.getSeconds();
  var uploadedImageName = new Array();
  // Create the multer middleware to handle file uploads
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../../public/assets/img/slider_image'); // Destination folder for uploaded files
    },
    filename: function (req, file, cb) {
      uploadedImageName.push(time+'_'+file.originalname);
      console.log(uploadedImageName);
      cb(null, time+'_'+file.originalname);
    },
  });

  const upload = multer({ storage: storage }).single('file');

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
    console.log(uploadedImageName);
    resp.send({
      status: "success",
      code: "200",
      message: "your record has been updated successfully.",
      data: uploadedImageName[0],
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