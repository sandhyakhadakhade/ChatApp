const express = require ('express');
const bodyParser = require('body-parser');
const route =require('./api/routes/routes');

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

//listen for requests
app.listen(3000, () => {
    console.log("server is listing on port 3000");
});

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
   // process.exit();
});


