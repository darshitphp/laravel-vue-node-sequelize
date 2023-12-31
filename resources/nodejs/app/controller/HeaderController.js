const HeaderModel = require('../model/HeaderModel');

exports.FindAllData = (req, resp) => {
  HeaderModel.getAllHeaderData(req)
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
  HeaderModel.getIdHeaderData(req)
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
  var socialMediaArray = new Array();
  var header_logo = new Array();
  // Create the multer middleware to handle file uploads
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      if (file.fieldname === 'header_logo') {
        cb(null, '../../public/assets/img/header_logo/'); // Destination folder for header_logo
      } else if (file.fieldname === 'social_image[]') {
        cb(null, '../../public/assets/img/header_logo/social_media'); // Destination folder for social_image
      } else {
        cb(new Error("Invalid fieldname"));
      }
    },
    filename: function (req, file, cb) {
      
      if (file.fieldname === 'header_logo') {
        header_logo.push(time+'_'+file.originalname);
      } else if (file.fieldname === 'social_image[]') {
        socialMediaArray.push(time+'_'+file.originalname);
      }
      cb(null, time+'_'+file.originalname);
    },
  });

    const upload = multer({ storage: storage }).fields([
      { name: 'header_logo', maxCount: 1 },
      { name: 'social_image[]', maxCount: undefined },
    ]);


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
        content,
        position,
      } = req.body;

      // Access the uploaded files
      const files = req.files;
      // socialMediaArray = JSON.stringify(socialMediaArray);
      
      req.body.logo_img = header_logo[0];
      req.body.social_media = socialMediaArray;

      var socialLinks = new Array();
      const socialTitleArray = req.body.social_title.split(',');
      const socialLinkArray = req.body.social_link.split(',');


      for (var i = socialLinkArray.length - 1; i >= 0; i--) {
        const socialMedia = [
          socialTitleArray[i],
          socialMediaArray[i],
          socialLinkArray[i]
        ];
        
        socialLinks.push(socialMedia)
      }
      socialLinks = JSON.stringify(socialLinks);
      req.body.social_links = socialLinks;
      HeaderModel.addHeaderData(req)
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

exports.headerLogoUpload = (req, resp) => {
  const express = require('express');
  const multer = require('multer');
  const app = express();
  var today = new Date();
  var time = today.getFullYear() + '-' + (today.getMonth() + 1) + today.getDate() + '-' + today.getHours() + "-" + today.getMinutes() + "-" + today.getSeconds();
  var uploadedImageName = new Array();
  // Create the multer middleware to handle file uploads
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../../public/assets/img/header_logo'); // Destination folder for uploaded files
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

exports.socialImageUpload = (req, resp) => {
  const express = require('express');
  const multer = require('multer');
  const app = express();
  var today = new Date();
  var time = today.getFullYear() + '-' + (today.getMonth() + 1) + today.getDate() + '-' + today.getHours() + "-" + today.getMinutes() + "-" + today.getSeconds();
  var uploadedImageName = new Array();
  // Create the multer middleware to handle file uploads
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../../public/assets/img/header_logo/social_media'); // Destination folder for uploaded files
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

exports.UpdateData = (req, resp) => {
  const express = require('express');
  const app = express();
  const filteredArray = req.body.socialImageArray.filter(value => value !== null);

  req.body.social_links = JSON.stringify(filteredArray);  
  HeaderModel.updateHeaderData(req,req.body.id)
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
};

exports.DeleteData = (req, resp) => {
  HeaderModel.deleteHeaderData(req)
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