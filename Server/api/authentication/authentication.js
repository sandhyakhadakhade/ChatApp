
 //  @Purpose :Create authentication to change the settings or password.
const jwt = require('jsonwebtoken');
exports.checkToken = (req,res,next) => {
    console.log("req in token-",req.headers);
    
    try{
        var token1 = req.headers['token'];
        //decode
        if(token1){
            jwt.verify(token1,'secretkey',(err,decoded) => {
                if(err){
                    return res.send({
                        success: false,
                        message: 'token is not valid'
                    });
                }else{

                    req.decoded = decoded;
                    console.log("req.decoded--->",decoded);
                    
                    next();
                }
            });
        }
        else{
            //if there is no token is return an error
            return res.send({
                success: false,
                message: 'no token provided'
            })
        }
    }catch(err){
        res.send(err);
    }
}












 
 