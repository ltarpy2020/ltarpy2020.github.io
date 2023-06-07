const model = require('../models/story')


exports.index = (req, res) =>
{
    let stories = model.find();
    res.render('./story/index', {stories});
};

//getting new stories: send html form for a new story
exports.new = (req, res) =>
{
    res.render('./story/new');
};

//creating a new story
exports.create = (req, res) =>
{
    //res.send('created a new story');
    let story = req.body;
    model.save(story);
    res.redirect('/stories');
};

//send the story idenitfied by ID
exports.show = (req, res, next) =>
{
    let id = req.params.id;
    let story = model.findBYId(id);
    if(story) {
    res.render('./story/show', {story});
    } else
    {
        let err = new Error('Cannot find story with id' + id);
        err.status = 404;
        next(err);
    }
};

//update: sending the form for existing story
exports.edit = (req, res, next) =>
{
    let id = req.params.id;
    let story = model.findBYId(id);
    if(story) {
        res.render('./story/edit', {story});
        } else
        {
            //For future reference
            //res.status(404).send('Cannot find story with ID' + id);
            let err = new Error('Cannot find story with id' + id);
            err.status = 404;
            next(err);
        }
};

//updating story identified by ID
exports.update = (req, res, next) =>
{
    let story = req.body;
    let id = req.params.id;

    if (model.updateById(id, story))
    {
        res.redirect('/stories/'+id)
    } else
    {
        let err = new Error('Cannot find story with id' + id);
        err.status = 404;
        next(err);
    }
};

//deleting a story identified by ID
exports.delete = (req, res, next) =>
{
    let id = req.params.id;
    if(model.deleteById(id))
    {
        res.redirect('/stories');
    } else
    {
        let err = new Error('Cannot find story with id' + id);
        err.status = 404;
        next(err);
    }
};