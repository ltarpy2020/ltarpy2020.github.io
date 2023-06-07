const model = require('../models/events');

//reference the mod 5 and 6 videos for this
exports.index = (req, res) =>
{
    //The events page is called event1
    let events = model.find();
    res.render('../views/event1', {events});
};

exports.new = (req, res) =>
{
    //The new events page is called event3
    res.render('../views/event3');
};

exports.create = (req, res) =>
{
    //this creates an event referenced in event3 and redirects to event1 page
    let events = req.body;
    model.save(events);
    res.redirect('/events');
};

exports.show = (req, res) =>
{
    //the event details is called event2
    let id = req.params.id;
    let events = model.findById(id);
    if(events)
    {
        res.render('../views/event2', {events});
    }
    else
    {
        res.status(404).send('Cannot find event with id ' + id);
    }
    //Gives 404 error if it cannot find an event with id
};

exports.edit = (req, res) =>
{
    //Goes to the edit form if needed to edit, refrenced by mod 6 video
    let id = req.params.id;
    let events = model.findById(id);
    if(events)
    {
        res.render('../views/edit', {events});
    }
    else
    {
        res.status(404).send('Cannot edit event with id ' + id);
    }
};

exports.update = (req, res) =>
{
    //Once udpated, it redirects back to the event1 page
    let event = req.body;
    let id = req.params.id;

    if (model.updateById(id, event))
    {
        res.redirect('/events/' + id);
    }
    else
    {
        res.status(404).send('Cannot find event with id ' + id);
    }
};

exports.delete = (req, res) =>
{
    //This deletes any story, refernced by mod 6 video
    let id = req.params.id;
    if(model.deleteById(id))
    {
        res.redirect('/events');
    }
    else
    {
        res.status(404).send('Cannot find event with id ' + id);
    }
};

//module.exports = router;