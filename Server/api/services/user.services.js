
const userModel = require('../models/user.model.js')
//login
exports.login = (data, callback) => {
    try {
        console.log("services use data:", data);
        userModel.login(data, (err, result) => {
            if (err) {
                console.log("service error");
                callback(err);
            }
            else {
                console.log("In service", result);
                callback(null, result);
            }
        })
    } catch (error) {
        callback.send(error);
    }
}
//registration
exports.registration = (data, callback) => {
    console.log('req in services',data);
    try {
        userModel.registration(data, (err, result) => {
            if (err) {
                console.log("service error");
                callback(err);
            }
            else {
                console.log("In service", result);
                callback(null, result);
            }
        })
    } catch (error) {
        callback.send(error);
    }
}
exports.redirect = (decoded, callback) => {
    userModel.confirmUser(decoded, (err, result) => {
        if (err) {
            callback(err);
        } else {
            callback(null, result);
        }
    })
}
/**
 * 
 * @param {*} data 
 * @param {*} callback 
 */
exports.getUserEmail = (data, callback) => {
    try {
        userModel.findUserEmail(data, (err, result) => {
            if (err) {
                console.log("service error");
                callback(err);
            } else {
                console.log("In service", result);
                callback(null, result);
            }
        })
    } catch (error) {
        callback.send(error);
    }
}
exports.resetpassword = (req, callback) => {
    try {
        userModel.updateUserPassword(req, (err, result) => {
            if (err) {
                console.log("service error");
                callback(err);
            } else {
                console.log("In service", result);
                callback(null, result);
            }
        })
    } catch (error) {
        callback.send(error);
    }
}

exports.getAllUsers = (data, callback) => {
    userModel.getAllUsers(data, (err, result) => {
        if (err) {
            callback(err);
        }
        else {
            callback(null, result);
        }
    })

}

