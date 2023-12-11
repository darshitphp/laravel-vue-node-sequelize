const PopupModel = require('../model/PopupModel');

exports.FindAllData = (req, resp) => {
  PopupModel.getAllPopupData(req)
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
  console.log(req);
  PopupModel.getIdPopupData(req)
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
  console.log(req.body);
  PopupModel.addPopupData(req)
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

exports.UpdateData = (req, resp) => {
  PopupModel.updatePopupData(req,req.body.id)
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

exports.DeleteData = (req, resp) => {
  PopupModel.deletePopupData(req)
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