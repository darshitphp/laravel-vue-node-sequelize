const SettingModel = require('../model/SettingModel');

exports.FindIdData = (req, resp) => {
  SettingModel.getIdSettingData(req)
    .then((result) => {
      resp.send({
        status: "success",
        code: "200",
        message: "All Data from Many to Many",
        data: result,
      });
    })
    .catch((error) => {
      console.log(error);
      resp.send({
        status: "error",
        code: "500",
        message: error,
      });
    });
};

exports.UpdateData = (req, resp) => {
  SettingModel.updateSettingData(req,req.body.id)
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
