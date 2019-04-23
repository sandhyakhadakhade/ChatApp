const chatModel = require('../models/chat.model');
exports.addMessage = (req,callback) => {
    try{
        chatModel.addMessage(req,(err,result)=>{
            if(err){
                console.log("Service err");
                callback(err);
                
            }else{
                console.log("In service",result);
                callback(null,result);
            }
        })
    }catch(err){
        res.send(err);
    }

}
exports.getAllUserChats = (req,callback) =>{
    try{
        chatModel.getAllUserChats(req,(err,result) => {
            if(err){
                console.log("service err ");
                callback(err);
            }else{
                console.log("In service ",result);
                callback(null,result);
            }
        })
    }catch(err){
        res.send(err);
    }
}