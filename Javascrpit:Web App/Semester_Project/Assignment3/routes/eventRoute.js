//Controllers for all pages, refrenced videos
//Gets the route for all requests (get, post, etc)

const express = require('express');
const controller = require('../controllers/eventController');

const router = express.Router();


router.get('/', controller.index);

router.get('/new', controller.new);

router.post('/', controller.create);

router.get('/:id', controller.show);

router.get('/:id/edit', controller.edit);

router.put('/:id', controller.update);

router.delete('/:id', controller.delete);

//router.get('/about', controller.about);

//router.get()

module.exports = router;