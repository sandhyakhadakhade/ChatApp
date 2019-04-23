const express = require ('express');
const bodyParser = require('body-parser');
const route =require('./api/routes/routes');
const chatControllers = require('./api/controllers/chat.controller');
var cors = require('cors');
//create express app
const app = express();
// var app = express()
app.use(cors())

//parse requests of content-type -application/x-www-form url
app.use(bodyParser.urlencoded({extended: true}))

//parse requests of content-type-appliction/json
app.use(bodyParser.json())

//start execution from here 
app.use('/',route);

//define a simple route
app.get('/',(req,res) => {
    res.json({"message":"Welcome to chat application"})
});
// Require Notes routes
// *************require('./app/routes/user.routes.js')(app);*******************
// var server = require('http').Server(app);
//listen for requests
var server = app.listen(3000, () => {
    console.log("server is listing on port 3000");
});

// server.listen(3000,() =>{
//     console.log("server is listing on port 3000");
// })

//configuring the database
const dbConfig = require('./api/configurations/database.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//conecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() =>{
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('chould not connect to the database,Exithing now ',err);
   process.exit();
})
const io = require('socket.io').listen(server)
io.sockets.on('connection', function (socket) {
    connections = [];
    connections.push(socket)
    console.log("A user has connected");
    socket.on('newmsg', function (req) {
        console.log("req in server js======>",req);
        chatControllers.addMessage(req, (err, result) => {
            if (err) {
              
                console.log("error on server while receiving data");
                console.log(err);
            }
            else {
               // socket.emit('emitMsg', result);
            }
            io.emit(req.recieverId, result);
            io.emit(req.senderId,result);
        })
    })
})
// socket Disconnect
io.on('disconnect', function (data) {
    connections.splice(connections.indexOf(socket), 1)
    // io.emit("User disconnected");
    console.log("user disconnected");

})

