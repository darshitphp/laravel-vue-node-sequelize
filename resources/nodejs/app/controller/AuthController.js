const AuthsModel = require('../model/AuthsModel.js')
const secretKey = 'kaU8VHzc21KuC90iA13GuVKyzBh92m5zTSbPB749GYfgldaE9ug9hN6Css1uTer4';
const jwt = require('jsonwebtoken');
const axios = require('axios');
// const bcrypt = require('bcrypt');
const bcrypt = require('bcryptjs');

exports.login = async (req, res) => {
  const result1 = await AuthsModel.checkForUserData(req);
  if (!result1) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const storedHash = result1.password;
  const plainPassword = req.body.password;
  
  // Compare the provided password with the stored hash
  const passwordMatch = await bcrypt.compare(plainPassword, storedHash);

  if (!passwordMatch) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Authenticate user (e.g., validate credentials against database)
  const user = { id: result1.id, username: result1.user_name };

  // Generate JWT token
  const token = jwt.sign({ sub: user.id, username: user.username }, secretKey, { expiresIn: 24 * 60 * 60 });

  // Send token in the response
  res.status(200).json({ message: 'Login successful ' + user.username, token });
};

exports.updateUserPassword = (req, resp) => {
  AuthsModel.updateUserPassword(req,req.body.email)
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

exports.updateUserData = async (req, res) => {
  const express = require('express');
  const multer = require('multer');
  const app = express();
  var today = new Date();
  var time = today.getFullYear() + '-' + (today.getMonth() + 1) + today.getDate() + '-' + today.getHours() + "-" + today.getMinutes() + "-" + today.getSeconds();
  var imageArray = new Array();
  // Create the multer middleware to handle file uploads
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../../public/assets/img/admin_profile'); // Destination folder for uploaded files
    },
    filename: function (req, file, cb) {
      imageArray.push(time+'_'+file.originalname);
      cb(null, time+'_'+file.originalname);
    },
  });

  const upload = multer({ storage: storage }).single('image');
  upload(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        // Handle multer errors
        console.log('Multer Error:', err);
        return res.status(400).send('Error uploading files.');
      } else if (err) {
        // Handle other errors
        console.log('Error:', err);
        return res.status(500).send('Internal server error.');
      }

      // Access the form data
      const {
        id,
        user_name,
        gender,
        address,
        number,
        city,
        ZIP,
      } = req.body;

      req.body.image = imageArray[0];
      console.log(imageArray[0]);
      console.log(req.body);
      AuthsModel.updateUserData(req,req.body.id)
      .then((result) => {
        res.send({
          status: "success",
          code: "200",
          message: "your record has been updated successfully.",
        });
      })
      .catch((error) => {
        res.send({
          status: "error",
          code: "500",
          message: error,
        });
      });
  })
};

exports.create_users_auth = async(req,res)=>{
    const vUsername = req.body.vUsername
    const vEmail = req.body.vEmail
    const vOTP = req.body.vOTP
    const vPassword = req.body.vPassword
    const vAddress = req.body.vAddress
    const vCity = req.body.vCity
    const vPincode = req.body.vPincode


    const commonUserData = {
        vUsername,
        vPassword,
        vAddress,
        vCity,
        vPincode
      };
    
      if (vEmail) {
        commonUserData.vEmail = vEmail;
      } else {
        commonUserData.vOTP = vOTP;
      }
      if(vEmail != undefined && vEmail != ""){
      try {
        const newUser = await AuthsModel.create(commonUserData);
    
        if (newUser) {
          res.send({
            message: 'success',
            data: commonUserData,
          });
        } else {
          res.send({
            message: 'Nahi hua',
          });
        }
      } catch (err) {
        console.error(err);
        res.send({
          message: err,
        });
      }
    }else{
      res.send({
        "message":"vEmail paramter required."
      })
    }
    

}