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

exports.UpdateData = (req, resp) => {
  console.log(req);
  const formidable = require('formidable');
  const fs = require('fs');

  // Create a new Formidable form
  const form = new formidable.IncomingForm();

  // Set the directory to store uploaded files
  form.uploadDir = '../../public/assets/img/header_logo/';

  // Parse the incoming request
  form.parse(req, (err, fields, files) => {
    if (err) {
      console.error(err);
      res.statusCode = 500;
      return res.end('Error occurred while processing form data.');
    }

    // Access the fields and files
    const { title, position, content, id, social_title, social_link, header_logo, social_media } = fields;
    // const social_media = files.social_media; // Array of uploaded files

    // Do something with the form data
    console.log('Title:', title);
    console.log('Position:', position);
    console.log('Content:', content);
    console.log('ID:', id);
    console.log('Social Title:', social_title);
    console.log('Social Link:', social_link);
    console.log('Header Logo:', header_logo);
    console.log('Social Media:', social_media);

    // Handle the uploaded files
    social_media.forEach((social_media, index) => {
      console.log("in social media: "+social_media);
      // Retrieve information about the uploaded file
      const { name, path, type } = social_media;

      // Read the file content
      fs.readFile(path, (err, data) => {
        if (err) {
          console.error(err);
          return res.status(500).end('Error occurred while reading file.');
        }

        // Do something with the file data
        console.log(`Social Image ${index + 1}:`);
        console.log(`- File Name: ${name}`);
        console.log(`- File Type: ${type}`);
        console.log('- File Content:', data.toString());

        // Delete the uploaded file
        fs.unlink(path, (err) => {
          if (err) {
            console.error(err);
          }
        });

        // Continue processing other files or send response

        if (index === social_media.length - 1) {
          // Send a response back to the client
          res.statusCode = 200;
          res.end('Form data processed successfully.');
        }
      });
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