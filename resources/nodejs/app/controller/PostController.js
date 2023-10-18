const PostModel = require("../model/PostModel");

exports.findAllPostData = (req,res)=>{
    PostModel.getAllPostData(req).then((result)=>{
        res.send({
            "status":"success",
            "code":"200",
            "message":"Post Data",
            "data":result
        })
    }).catch((error)=>{
        res.send({
            "status":"success",
            "code":"500",
            "message":error
        })
    })
};
exports.findAllTagPostData = (req,res)=>{
    PostModel.getAllTagPostData(req).then((result)=>{
        res.send({
            "status":"success",
            "code":"200",
            "message":"All Data",
            "Data":result
        }).catch((error)=>{
            res.send({
                "status":"error",
                "code":"500",
                "message":error
            })
        })
    })
}