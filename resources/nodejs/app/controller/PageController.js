const PageModel = require('../model/PageModel');
const PageSectionModel = require('../model/PageSectionModel');
exports.FindAllData = (req, resp) => {
  PageModel.getAllPageData(req)
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
  // Use Promise.all to wait for both promises to resolve    
  Promise.all([
    PageModel.getIdPageData(req),
    PageSectionModel.getByPageIdTransactionData(req.body.id), // Assuming id is passed as a parameter
  ])
  .then(([pageData, transactionData]) => {
    resp.send({
      status: "success",
      code: "200",
      message: "All Data from Many to Many",
      data: {
        page: pageData,
        pageSection: transactionData,
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
  PageModel.addPageData(req)
  .then((result) => {
      const lastInsertedId = result.dataValues.id;
      //for setting up inserted id in indexes
      for (var i = 0; i < req.body.sectionArray.length; i++) {
        req.body.sectionArray[i].push(["page_id", lastInsertedId]);
      }
      
      PageSectionModel.addPageSectionData(req.body.sectionArray)
      .then((result1) => {
        resp.send({
          status: "success",
          code: "200",
          message: "your record has been inserted successfully.",
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
  console.log(req.body.id);
  PageModel.updatePageData(req,req.body.id)
    .then((result) => {
      const lastInsertedId = req.body.id;
      //Deleting Transaction Data From transaction table where footer id equal
      PageSectionModel.deletePageSectionByPageId(lastInsertedId)
      .then((res) => {
        //Removing null index from associative array and updating array
        req.body.sectionArray = req.body.sectionArray.filter((arr) => arr.length > 0);
        //for setting up inserted id in indexes
        for (var i = 0; i < req.body.sectionArray.length; i++) {
          req.body.sectionArray[i].push(["page_id", req.body.id]);
        }
        //Adding new updated records into transaction table
        PageSectionModel.addPageSectionData(req.body.sectionArray)
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
  // PageModel.updatePageData(req,req.body.id)
  //   .then((result) => {
  //       resp.send({
  //           status: "success",
  //           code: "200",
  //           message: "your record has been updated successfully.",
  //       });
  //   })
  //   .catch((error) => {
  //     resp.send({
  //       status: "error",
  //       code: "500",
  //       message: error,
  //     });
  //   });
};

exports.DeleteData = (req, resp) => {
  PageModel.deletePageData(req)
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