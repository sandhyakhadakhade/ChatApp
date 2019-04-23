//chat Schema
mongoose = require('mongoose');
var mongoSchema = mongoose.Schema;
var chatSchema = new mongoSchema({
    'senderId' : {
        type: String,
        required:[true, "sender is required"]
    },
    'reciverId' : {
        type : String,
        required:[true, "reciverId is required"] 
    },
    'message' : {
        type : String,
        required:[true , " message is required"]
    }
},{
        timestimps : true
    });

function chatModel() { };
    var chat = mongoose.model("chatInfo",chatSchema);

chatModel.prototype.addMessage = (chatData,callback) => {
    const newMsg = new chat({
        senderId : chatData.senderId,
        reciverId : chatData.reciverId,
        message :chatData.message
    });
    newMsg.save((err,result) => {
        if(err){
            console.log("Message not sent");
            return callback(err);
        }else{
            console.log("Message sent");
            return callback(null,result);
        }
    })
}

chatModel.prototype.getAllUserChats = (chatData,callback) => {
    chat.find({},(err,result) => {
        if(err){
            // console.log("User not found");
            return callback(err);
        }
        else{
            // console.log("user");
            return callback(null,result);
        }
    })
}

module.exports = new chatModel;





















/**mongoose = require('mongoose');

var mongoSchema = mongoose.Schema;

var chatSchema = new mongoSchema({
    'senderId': {
        type: String,
        required: [true, "Sender Id is required"]
    },
    'recieverId': {
        type: String,
        required: [true, "Reciever Id is required"]
    },
    'message': {
        type: String,
        required: [true, " Message is required "]
    }
}, {
        timestamps: true
    });
    function chatModel() { }
var chat = mongoose.model('chatInfo', chatSchema);

//   store messages into the database

chatModel.prototype.addMessage = (chatData, callback) => {
    
    console.log('chatData model-->', chatData);
    const newMsg = new chat({
        'senderId': chatData.senderId,
        'recieverId': chatData.recieverId,
        'message': chatData.message
    });
    newMsg.save((err, result) => {
        if (err) {
            console.log("message saved error");
            return callback(err);
        } else {
            console.log("message saved successfully ");
            return callback(null, result);
        }
    });
}

chatModel.prototype.getAllUserChats = (callback) => {
    chat.find({}, (err, result) => {
        if (err) {
            callback(err);
        } else {
            callback(null, result);
        }
    });
}
module.exports = new chatModel();*/