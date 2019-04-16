
const jwt = require('jsonwebtoken');
module.exports = {
    GenerateToken(payload) {
        // console.log("genrate token");
        const token = jwt.sign({ payload }, 'secretkey', { expiresIn: '1d'}) 
        const obj = {
            success: true,
            message: 'Token Generated Successfully!!',
            token: token
        }
        return obj;
    }
}