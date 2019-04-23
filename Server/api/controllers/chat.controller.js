const chatServices = require('../services/chat.services');
exports.addMessage = (req,callback) =>{
    chatServices.addMessage(req,(err,data)=>{
        if(err){
            return callback(err);
        }else{
            return callback(null,data);
        }
    })
}
exports.getAllUserChats = (req,res) => {
try{
    console.log("req in controller",req.body);
    var responseResult = { };
    chatServices.getAllUserChats = (req.body,(err,result)=>{
        if(err){
            responseResult.success = false;
            responseResult.error = err;
            res.status(500).send(responseResult);
        }
        else{
            responseResult.success = true;
            responseResult.result = result;
            res.status(200).send(responseResult);
        }
    })
}catch(err){
    res.send(err);
}
}
