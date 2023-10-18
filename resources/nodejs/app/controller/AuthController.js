const AuthsModel = require('../model/AuthsModel.js')

// exports.create_users_auth = (req,res)=>{
//         console.log(req.body.vUsername,"{{{{{{{{{{{{");
//         const vUsername = req.body.vUsername
//         const vEmail = req.body.vEmail
//         const vOTP = req.body.vOTP
//         const vPassword = req.body.vPassword
//         // if(vEmail == "" || vEmail == undefined){
//         //   return res.status(400).send({
//         //     "messsgae":"Enter proper data"
//         //   })
      
        
//         // }
        

//         if(vEmail){
//         const userData = {
//             vUsername:vUsername,
//             vEmail:vEmail,
//             // vOTP:vOTP,
//             vPassword:vPassword
//         }
//         AuthsModel.create(userData).then((result)=>{
//             if(result){
//             res.send({
//                 "message":"success",
//                 "data":userData
//             })
//         }else{
//             res.send({
//                 "message":"NAhi hua "
//             })   
//         }
//         }).catch((err)=>{
//             console.log(err)
//             res.send({
//                 "message":err
//             })
//         })
//     }else{
//         const userData = {
//             vUsername:vUsername,
//             // vEmail:vEmail,
//             vOTP:vOTP,
//             vPassword:vPassword
//         }
//         AuthsModel.create(userData).then((result)=>{
//             if(result){
//             res.send({
//                 "message":"success",
//                 "data":userData
//             })
//         }else{
//             res.send({
//                 "message":"NAhi hua "
//             })   
//         }
//         }).catch((err)=>{
//             console.log(err)
//             res.send({
//                 "message":err
//             })
//         })
//     }
// }
exports.create_users_auth = async(req,res)=>{
    console.log(req.body.vUsername,"{{{{{{{{{{{{");
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


      // if(vEmail == undefined || vEmail == ""){
      //   return res.status(400).send({
      //     "message":"error"
      //   })
      // }
    
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