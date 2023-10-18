const UserModel = require("../model/UserModel")
const UserssModel = require('../model/AuthsModel.js')
const bcrypt = require('bcrypt');
var storedHash = null;

    exports.addUserData = (req,resp) => {
        var data = {};
        const plainPassword = req.body.vPassword;
        var hashPassword = null;
        // Generate a salt with 10 rounds
        const saltRounds = 10;
        bcrypt.genSalt(saltRounds, function(err, salt) {
          if (err) {
            // Handle error
            return;
          }

          // Hash the password using the generated salt
          bcrypt.hash(plainPassword, salt, function(err, hash) {
            if (err) {
              // Handle error
              return;
            }
            
            data['vPassword'] = hash;
            data['vName'] = req.body.vName;
            data['iAge'] = req.body.iAge;
            data['vCity'] = req.body.vCity;
            data['vEmail'] = req.body.vEmail;
            data['vFav_Food'] = req.body.vFav_Food;
            data['vGender'] = req.body.vGender;
            data['vHobbies'] = req.body.vHobbies;
            
            UserModel.addUserData(data)
            .then((result) => {
              resp.send({
                status: "success",
                code: "200",
                message: "User registered successfully.",
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
          });
        });
    }

    exports.checkForUserData = (req, resp) => {
        
        UserModel.checkForUserData(req)
        .then((result1) => {
            storedHash = result1.vPassword;
            var plainPassword = req.body.vPassword;
            // Compare the provided password with the stored hash
            bcrypt.compare(plainPassword, storedHash, function(err, result) {
              if (err) {
                // Handle error
                resp.send({
                    status: "error",
                    code: "500",
                    message: "Password did not match.",
                    data: result,
                });
              }

              if (result) {
                resp.send({
                    status: "success",
                    code: "200",
                    message: "User Data fatch successfully.",
                    data: result1,
                    storedHash:storedHash
                });
              } else {
                resp.send({
                    status: "error",
                    code: "500",
                    message: "Password did not match.",
                    data: result,
                });
              }
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
    
    exports.findAllUserData = (req,res) => {
        UserModel.getAllUserData(req).then(result => {
            res.send({
                "status": "success",
                "code": "200",
                "message": "Product Data Found",
                "data": result
            });
        }).catch((err) => {
            return res.send({
                "status": "error",
                "code": "500",
                "message": err
            })
        })
    };
    exports.findAllPostUserData = (req,res) => {
        UserModel.PostAndUserData(req).then(result => {
            res.send({
                "status": "success",
                "code": "200",
                "message": "User and Post Data Found",
                "data": result
            });
        }).catch((err) => {
            return res.send({
                "status": "error",
                "code": "500",
                "message": err
            })
        })
    };
