const model = require('../models/story')


exports.index = (req, res) =>
{
    let stories = model.find();
    res.render('./story/index', {stories});
};

//getting new stories: send html form for a new story
exports.new = (req, res) =>
{
    res.send('send the new form');
};

//creating a new story
exports.create = (req, res) =>
{
    res.send('created a new story');
};

//send the story idenitfied by ID
exports.show = (req, res) =>
{
    let id = req.params.id;
    let story = model.findBYId(id);
    if(story) {
    res.render('./story/show', {story});
    }
    res.status(404).send('Cannot find story with ID' + id);
};

//update: sending the form for existing story
exports.edit = (req, res) =>
{
    res.send('send the edit form');
};

//updating story identified by ID
exports.update = (req, res) =>
{
    res.send('update story with id' + req.params.id);
};

//deleting a story identified by ID
exports.delete = (req, res) =>
{
    res.send('delete the story with id' + req.params.id);
};