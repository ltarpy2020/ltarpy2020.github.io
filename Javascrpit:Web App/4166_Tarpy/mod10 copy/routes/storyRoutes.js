const express = require('express');
const controller = require('../controllers/storyController');
const {isLoggedin, isAuthor} = require('../middleware/auth');

const router = express.Router();

//GET /stories: send all stories to the user
router.get('/', controller.index);

//GET /stories/new: send html form for creating a new story
router.get('/new', isLoggedin, controller.new);

//POST /stories: create a new story

router.post('/', isLoggedin, controller.create);

//GET /stories/:id: send details of story identified by id
router.get('/:id', controller.show);

//GET /stories/:id/edit: send html form for editing an exising story
router.get('/:id/edit', isLoggedin, controller.edit);

//PUT /stories/:id: update the story identified by id
router.put('/:id', isLoggedin, controller.update);

//DELETE /stories/:id, delete the story identified by id
router.delete('/:id', isLoggedin, controller.delete);

module.exports = router;