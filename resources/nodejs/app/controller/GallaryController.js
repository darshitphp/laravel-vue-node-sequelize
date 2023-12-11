const GallaryModel = require('../model/GallaryModel');

exports.FindAllData = (req, resp) => {
  GallaryModel.getAllGallaryData(req)
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
  GallaryModel.getIdGallaryData(req)
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
  var gallaryImageArray = new Array();
  // Create the multer middleware to handle file uploads
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../../public/assets/img/gallary'); // Destination folder for uploaded files
    },
    filename: function (req, file, cb) {
      gallaryImageArray.push(time+'_'+file.originalname);
      cb(null, time+'_'+file.originalname);
    },
  });

  const upload = multer({ storage: storage }).array('gallary_image[]');

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
        alter,
        custom_link
      } = req.body;

      // Access the uploaded files
      const files = req.files;
      const alterArray = req.body.alter.split(',');
      const custom_linkArray = req.body.custom_link.split(',');
      const promises = [];

      for (var i = custom_linkArray.length - 1; i >= 0; i--) {
        const socialMedia = {
          alter: alterArray[i],
          image: gallaryImageArray[i],
          custom_link: custom_linkArray[i]
        };

        // Add the promise to the array
        promises.push(
          GallaryModel.addGallaryData(socialMedia)
            .then((result) => {
              console.log(result); // Log the result if needed
            })
            .catch((error) => {
              console.error(error); // Log the error if needed
            })
        );
      }

      // Wait for all promises to resolve
      Promise.all(promises)
      .then(() => {
        // Send the response once all promises are resolved
        resp.send({
          status: "success",
          code: "200",
          message: "Records have been inserted successfully.",
        });
      })
      .catch((error) => {
        // Handle errors that may occur during Promise.all
        resp.status(500).send({
          status: "error",
          code: "500",
          message: error,
        });
      });

    });

  
};

exports.UpdateAfterRemoveImgData = (req, resp) => {
  GallaryModel.updateGallaryData(req,req.body.id)
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
  var gallaryImageArray = new Array();

  // Create the multer middleware to handle file uploads
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../../public/assets/img/gallary'); // Destination folder for uploaded files
    },
    filename: function (req, file, cb) {
      gallaryImageArray.push(time+'_'+file.originalname);
      cb(null, time+'_'+file.originalname);
    },
  });

  const upload = multer({ storage: storage }).array('gallary_image[]');

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
        alter,
        custom_link
      } = req.body;

      //getting recently updated slider image json 
      GallaryModel.getGallaryByIdData(id)
      .then((result) => {
        const oldgallaryImagesData = JSON.parse(result.dataValues.gallary_image);
        const files = req.files;
        // gallaryImageArray = JSON.stringify(gallaryImageArray);
        gallaryImageArray.forEach(function (value, i) {
          //concating both old json and new uploaded files json then merge both and updating to new one
          oldgallaryImagesData.push(value);
        });
        
        req.body.gallary_image = JSON.stringify(oldgallaryImagesData);

        GallaryModel.updateGallaryData(req,req.body.id)
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
  GallaryModel.deleteGallaryData(req)
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