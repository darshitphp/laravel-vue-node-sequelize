const CategoryModel = require('../model/CategoryModel');

exports.FindAllData = (req, resp) => {
  CategoryModel.getAllCategoryData(req)
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
  CategoryModel.getIdCategoryData(req)
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
      cb(null, '../../public/assets/img/category'); // Destination folder for uploaded files
    },
    filename: function (req, file, cb) {
      sliderImageArray.push(time+'_'+file.originalname);
      cb(null, time+'_'+file.originalname);
    },
  });

  const upload = multer({ storage: storage }).single('banner_image');

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
        name,
        slug,
        content,
        include,
        status,
      } = req.body;

      // Access the uploaded files
      const files = req.files;
      req.body.banner_image = sliderImageArray[0];
      // Do something with the form data and uploaded files
      CategoryModel.addCategoryData(req)
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
  CategoryModel.updateCategoryData(req,req.body.id)
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
      cb(null, '../../public/assets/img/category'); // Destination folder for uploaded files
    },
    filename: function (req, file, cb) {
      sliderImageArray.push(time+'_'+file.originalname);
      cb(null, time+'_'+file.originalname);
    },
  });

  const upload = multer({ storage: storage }).single('banner_image');

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
	        name,
	        slug,
	        content,
	        include,
	        status,
	        old_banner_image
	    } = req.body;
	    //getting recently updated slider image json 
	    const files = req.files;
	    if(sliderImageArray && sliderImageArray.length > 0 && sliderImageArray[0] !== null){
	    	console.log(sliderImageArray[0]);
	    	req.body.banner_image = sliderImageArray[0];
	    }else{
	    	req.body.banner_image = req.body.old_banner_image;
	    }
	    delete req.body.old_banner_image;
	    CategoryModel.updateCategoryData(req,req.body.id)
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
};

exports.DeleteData = (req, resp) => {
  CategoryModel.deleteCategoryData(req)
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