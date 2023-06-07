const express = require('express');
const controller = require('../controllers/userController');

const router = express.Router();

router.get('/', controller.index);

router.get('/new', controller.new);

router.post('/', controller.create);

router.get('/profile', controller.show);

router.get('/login', controller.edit);

router.delete('/logout', controller.delete);


module.exports = router;