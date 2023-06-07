//Controllers for all pages, refrenced videos
//Gets the route for all requests (get, post, etc)

const express = require('express');
const controller = require('../controllers/eventController');
const {isLoggedin, isAuthor} = require('../middleware/auth');

const router = express.Router();


router.get('/', controller.index);

router.get('/new', isLoggedin, controller.new);

router.post('/', isLoggedin, controller.create);

router.get('/:id', controller.show);

router.get('/:id/edit', isLoggedin, controller.edit);

router.put('/:id', isLoggedin, controller.update);

router.delete('/:id', isLoggedin, controller.delete);

//router.get('/about', controller.about);

//router.get()

module.exports = router;