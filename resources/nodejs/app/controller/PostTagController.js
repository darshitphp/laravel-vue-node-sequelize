const PostTagModel = require("../model/PostTagModel");

exports.findAllPostTagData=(req,resp)=>{
    PostTagModel.getAllPostTagData(req).then((result)=>{
        resp.send({
            "status":"success",
            "code":"200",
            "message":"All Data",
            "data":result
        }).catch((error)=>{
            resp.send({
                "status":"success",
                "code":"500",
                "message":error
            })
        })
    })
}

exports.findAllTagPostData=(req,resp)=>{
    PostTagModel.getAllTagPostData(req).then((result)=>{
        resp.send({
            "status":"success",
            "code":"200",
            "message":"All Data",
            "data":result
        })
        }).catch((error)=>{
            resp.send({
                "status":"error",
                "code":"500",
                "message":error
            })
    })
}