const express = require('express');
const controller = require('../controllers/userController');
const {isGuest, isLoggedin} = require('../middleware/auth');

const router = express.Router();

//users can get here with a new account
router.get('/new', isGuest, controller.new);

//This posts the new user account to the database
router.post('/', isGuest, controller.create);

//This gets the login page
router.get('/login', isGuest, controller.getUserLogin);

//This posts the login page
router.post('/login', isGuest, controller.login);

//This gets the profile page
router.get('/profile', isLoggedin, controller.profile);

//This allows the user to logout, also kills the cookie
router.get('/logout', isLoggedin, controller.logout);

//Added a guest feature to see our events
router.get('/guest', controller.guest);

module.exports = router;