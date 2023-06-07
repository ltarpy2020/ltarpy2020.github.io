const express = require('express');
const controller = require('../controllers/storyController');

const router = express.Router();


router.get('/', controller.index);

//getting new stories: send html form for a new story
router.get('/new', controller.new);

//creating a new story
router.post('/', controller.create);

//send the story idenitfied by ID
router.get('/:id', controller.show);

//update: sending the form for existing story
router.get('/:id/edit', controller.edit);

//updating story identified by ID
router.put('/:id', controller.update);

//deleting a story identified by ID
router.delete('/:id', controller.delete);

module.exports = router;