
//Requiring Bcrypt to create hash of the user password stored in database

const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
var saltRounds = 10;

//Creating user schema using mongoose
const UserSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    FirstName: {
        type: String, require: [true, "USerName require"],
    },
    Email: {
        type: String, unique: true, require: [true, "Email require"],
        match: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    },
    Password: {
        type: String, require: [true, "Password require"]
    },
},
    {
        timestamps: true
    });

var user = mongoose.model('User', UserSchema);
function userModel() { }
// if(!req.body.FirstName || req.body.length < 3){
//     res.status(400).send("Name is required and min length should be 4");
//     return;
// }        


userModel.prototype.registration = (body, callback) => {
    user.find({ "Email": body.Email }, (err, data) => {
        if (err) {
            console.log("Error in registration");
            callback(err);
        }
        else {
            if (data.length > 0) {
                console.log("Email already exists");
                callback("User already present");
            }
            else {
                body.Password = bcrypt.hashSync(body.Password, saltRounds);
                //    body.Password: bcrypt.hashSync(password, bcrypt.genSaltSync(10))
                bcrypt.hash(body.Email, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            error: err
                        });
                    }
                    else

                        var newUser = new user({
                            "_id": new mongoose.Types.ObjectId(),
                            "FirstName": body.FirstName,
                            "Email": body.Email,
                            "Password": body.Password,//bcrypt.hashSync(body.Password, bcrypt.genSaltSync(10)),

                        })
                    newUser.save((err, result) => {
                        if (err) {
                            console.log("Model not found");
                            callback(err);
                        } else {
                            console.log("Registered Successfully");
                          callback(null, result);
                          
                        }
                    })
                });
            }
        }
    });
}

userModel.prototype.login = (body, callback) => {
    console.log("model ", body.Password);
    user.find({ "Email": body.Email }, (err, result) => {
        if (err) {
            callback(err);
        }
        else if (result.length > 0) {
            console.log('result In', result);
            // return callback(null,result)
            // console.log("res 1",result[0].Password);
            // console.log("res 2",body.Password);
            bcrypt.compare(body.Password, result[0].Password).then(function (res) {
                if (res) {
                    console.log("Login Succesfully");
                    callback(null, res);
                } else {
                    console.log("Incorrect password");
                    callback("Incorrect password");
                }
            });
        } else {
            console.log("mail not found ,user doesnt exist ");
            return callback("mail not found ,user doesnt exist");
        }
    });
}


//  update the user password and store it in database
 
userModel.prototype.updateUserPassword = (req, callback) => {
    console.log("request in modellll-->",req.decoded);
    
    let newPassword = bcrypt.hashSync(req.body.Password, saltRounds);
    console.log('new pass bcrypt--', newPassword);
    user.updateOne({ _id: req.decoded.payload.user_id }, { Password: newPassword }, (err, result) => {
        if (err) {
            callback(err);
        }
        else {
            callback(null, result);
        }
    });
}
/**
 * Finding user email into database using the findOne()
 */
userModel.prototype.findUserEmail = (data, callback) => {
    user.findOne({ "Email": data.Email }, (err, result) => {
        if (err) {
            callback(err);
        }
        else {
            if (result !== null && data.Email == result.Email) {
                callback(null, result);
            }
            else {
                callback("incorect mail")
            }
        }
    });
}


module.exports = new userModel();

