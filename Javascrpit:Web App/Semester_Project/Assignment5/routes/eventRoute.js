//Controllers for all pages, refrenced videos
//Gets the route for all requests (get, post, etc)

const express = require('express');
const controller = require('../controllers/eventController');
const {isLoggedin, isAuthor} = require('../middleware/auth');
const{validateId, validateEvent, validateRSVP} = require('../middleware/validator');

const router = express.Router();


router.get('/', controller.index);

router.get('/new', isLoggedin, validateEvent, controller.new);

router.post('/', isLoggedin, validateEvent, controller.create);

router.get('/:id', validateId, controller.show);

router.get('/:id/edit', validateId, isLoggedin, isAuthor, validateEvent, validateRSVP, controller.edit);

router.put('/:id', validateId, isLoggedin, isAuthor, validateEvent, validateRSVP, controller.update);

router.delete('/:id', validateId, isLoggedin, isAuthor, validateRSVP, controller.delete);

router.post('/:id/rsvp', validateEvent, controller.rsvp);

//router.get('/about', controller.about);

//router.get()

module.exports = router;