const express = require('express');
const controller = require('../controllers/aboutController');

const router = express.Router();

//This gets the about page
router.get('/about', controller.about);

//This gets the contact page
router.get('/contact', controller.contact);

module.exports = router;