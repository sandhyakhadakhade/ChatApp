const User = require('../models/user.model.js');
const userService = require('../services/user.services.js');
// const token = require('./token');
const token = require('/home/admin1/JavaScript/ChatApllication/Server/api/authentication/token.js');
const sent = require('../authentication/nodemailer.js');
// Create and Save a new user
// exports.create = (req, res) => {

// };

//CORS middleware
// var allowCrossDomain = function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', 'example.com');
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');

//     next();
// }
exports.registration = (req, res) => {
    // app.use(allowCrossDomain);
    try {
        console.log("req in cntr",req.body);
        var responseResult = {}
        userService.registration(req.body, (err, result) => {
            if (err) {
                responseResult.success = false;
                responseResult.error = err;
                res.status(500).send(responseResult);
            }
            else {
                responseResult.success = true;
                responseResult.result = result;
                res.status(200).send(responseResult)
            }
        })
    } catch (err) {
        res.send(err);
    }
}


//login into database
module.exports.login = (req, res) => {
    
    try {
        console.log('data in controller', req.body);

        var responseResult = {}
        userService.login(req.body, (err, result) => {
            console.log('after service`');

            if (err) {
                responseResult.success = false;
                responseResult.error = err;
                res.status(401).send(responseResult);
            } else {
                resObj={
                    email:result[0].email,
                    userid:result[0]._id
                }

                const obj = token.GenerateToken(resObj);
                resObj.token=obj.token;
                resObj.name=result[0].FirstName;
                responseResult.success = true;
                responseResult.result = resObj;
                res.status(200).send(responseResult);
            }
        })
    } catch (err) {
        res.send(err);
    }
}
// Retrieve and return all users from the database.
// exports.findAll = (req, res) => {
//     res.send({"key":"all good 1"})
// };

exports.sendResponse = (req, res) => {
    try {
        console.log("user in ctrl send token is verified")
        var responseResult = {}
        userService.redirect(req.body, (err, result) => {
            if (err) {
                responseResult.success = false;
                responseResult.error = err;
                res.status(500).send(responseResult);
            }
            else {
                console.log("user in ctrl send token is verified giving response")
                responseResult.success = true;
                responseResult.result = result;
                res.status(200).send(responseResult);
            }
        })
    } catch (err) {
        res.send(err);
    }
}


exports.getUser = (req, res) => {
    console.log("Vefiy User in controller ");
    try {
        var responseResult = {}
        userService.getUserEmail(req.body, (err, result) => {
            if (err) {
                responseResult.success = false;
                responseResult.error = err;
                res.status(500).send(responseResult);
            } else {
                responseResult.success = true;
                responseResult.result = result;
                const payload = {
                    user_id: responseResult.result._id
                }
                console.log("payload ",payload);
                const obj = token.GenerateToken(payload);
                // const url = `http://localhost:3000/#/login/${obj.token}`;
                // const url = `http://localhost:8080/resetpassword`;
                const url = `http://localhost:8080/resetpassword/${obj.token}`;
                // const url = `http://localhost:8080/resetpassword`;
                console.log("token",obj);
                // console.log("Email",result.Email);
                sent.sendEMailFunction(url,result.Email);
                // res.status(200).send(url);
                 res.status(200).send(responseResult);
            }
        })
    } catch (err) {
        res.send(err);
    }
}
    exports.setPassword = (req, res) => {
        try {
            var responseResult = {}
            console.log("user in cntrol send token is verified response");
            // var obj={password:req.}
            userService.resetpassword(req, (err, result) => {
                if (err) {
                    responseResult.success = false;
                    responseResult.error = err;
                    res.status(500).send(responseResult);
                } else {
                    console.log("user in ctrl send token is verified giving response")
                    responseResult.success = true;
                    responseResult.result = result;
                    res.status(200).send(responseResult);
                }
            })
        } catch (err) {
            res.send(err);
        }
    }
    exports.getAllUsers = (req,res) =>{
        try{
            var responseResult = {}
            console.log("In controller ",req.body);
            userService.getAllUsers(req,(err,result) => {
                if(err){
                    responseResult.success = false;
                    responseResult.error = err;
                    res.status(500).send(responseResult);
                }else{
                    responseResult.success = true;
                    responseResult.result = result;
                    var allUsers = [];
                    for(let i=0; i < responseResult.result.length; i++){
                        allUsers.push({"userid":responseResult.result[i]._id,"name":responseResult.result[i].FirstName});
                        // allUsers = responseResult.result[i].FirstName;
                    }
                    res.status(200).send(allUsers);
                    // res.status(200).send(responseResult);

                }
            })
        }catch(err){
            res.send(err);
        }
    }

// Update a note identified by the noteId in the request
exports.update = (req, res) => {

};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {

};
