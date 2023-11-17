const FooterModel = require('../model/FooterModel');
const FooterTransaction = require('../model/FooterTransactionModel');

// Associate models

exports.FindAllData = (req, resp) => {
  // FooterModel.associate({ 'footer_transaction': FooterTransaction });
  // FooterTransaction.associate({ 'footers': FooterModel });
  FooterModel.getAllFooterData(req)
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

exports.FindIdData = (req, resp) => {
  FooterModel.getIdFooterData(req)
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
    
  FooterModel.addFooterData(req)
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
  FooterModel.updateFooterData(req,req.body.id)
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
  FooterModel.deleteFooterData(req)
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