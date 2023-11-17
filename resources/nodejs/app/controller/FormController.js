const FormModel = require('../model/FormModel');

exports.FindAllData = (req, resp) => {
  FormModel.getAllFormData(req)
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
  FormModel.getIdFormData(req)
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
  // console.log(req.body.fields);
  FormModel.addFormData(req)
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
  FormModel.updateFormData(req,req.body.id)
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
  FormModel.deleteFormData(req)
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