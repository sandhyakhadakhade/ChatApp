// module.exports = (app) => {
//     const userController = require('../controllers/user.controller.js');
//     // Create a new user


//     // Retrieve all Notes
//     app.get('/login', userController.login);

//     // Retrieve a single Note with noteId
//     app.get('/notes/:noteId', userController.findOne);

//     // Update a Note with noteId
//     app.put('/notes/:noteId', userController.update);

const userController = require('../controllers/user.controller.js');
const chatController = require('../controllers/chat.controller.js');
const middle = require('../authentication/authentication');
const express = require('express');
// creates router as a module
const router = express.Router();
router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.post('/verifyUser', userController.getUser);
router.post('/resetpassword',middle.checkToken,userController.setPassword);
router.get('/getAllUsers',userController.getAllUsers);
router.post('/addMessage',chatController.addMessage);

module.exports = router;


