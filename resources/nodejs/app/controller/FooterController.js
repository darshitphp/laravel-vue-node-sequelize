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
  // Use Promise.all to wait for both promises to resolve    
  Promise.all([
    FooterModel.getIdFooterData(req),
    FooterTransaction.getByFooterIdTransactionData(req.body.id), // Assuming id is passed as a parameter
  ])
  .then(([footerData, transactionData]) => {
    resp.send({
      status: "success",
      code: "200",
      message: "All Data from Many to Many",
      data: {
        footer: footerData,
        footerTransaction: transactionData,
      },
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
      const lastInsertedId = result.dataValues.id;
      //for setting up inserted id in indexes
      for (var i = 0; i < req.body.transactionArray.length; i++) {
        req.body.transactionArray[i].push(["footer_id", lastInsertedId]);
      }
      
      FooterTransaction.addFooterTransactionData(req.body.transactionArray)
      .then((result1) => {
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
      const lastInsertedId = req.body.id;
      //Deleting Transaction Data From transaction table where footer id equal
      FooterTransaction.deleteFooterTransactionDataByFooterId(lastInsertedId)
      .then((res) => {
        //Removing null index from associative array and updating array
        req.body.transactionArray = req.body.transactionArray.filter((arr) => arr.length > 0);
        //for setting up inserted id in indexes
        for (var i = 0; i < req.body.transactionArray.length; i++) {
          req.body.transactionArray[i].push(["footer_id", req.body.id]);
        }
        //Adding new updated records into transaction table
        FooterTransaction.addFooterTransactionData(req.body.transactionArray)
        .then((result1) => {
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