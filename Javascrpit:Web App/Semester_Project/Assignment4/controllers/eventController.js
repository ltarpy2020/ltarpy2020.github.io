const model = require('../models/events');
const {Router} = require('express');

const r = Router();

//reference the mod 5 and 6 videos for this
exports.index = (req, res, next) =>
{
    //The events page is called event1
    model.find()
    .then(events => res.render('../views/event1', {events}))
    .catch(err => next(err));
};

/* exports.about = (req, res, next) =>
{
    res.render('/about');
}; */

exports.new = (req, res) =>
{
    //The new events page is called event3
    res.render('../views/event3');
};

exports.create = (req, res, next)=>
{
    let event = new model(req.body);
    event.author = req.session.user;
    event.save()//insert the document to the database
    .then(event=> res.redirect('/events'))
    .catch(err=>{
        if(err.name === 'ValidationError' ) {
            err.status = 400;
        }
        next(err);
    });
    
};

exports.show = (req, res, next) =>
{
    //the event details is called event2
    let id = req.params.id;
    if(!id.match(/^[0-9a-fA-F]{24}$/))
    {
        let err = new Error('Invalid event ID');
        err.status = 400;
        return next(err);
    }
    let events = model.findById(id)
    .then(events =>
        {
            if(events)
            {
                res.render('../views/event2', {events});
            }
            else
            {
                let err = new Error('Cannot find event with id ' + id);
                err.status = 404;
                next(err);
            }
            //Gives 404 error if it cannot find an event with id
        })
    .catch(err=> next(err));
};

exports.edit = (req, res, next) =>
{
    //Goes to the edit form if needed to edit, refrenced by mod 6 video
    let id = req.params.id;
    if(!id.match(/^[0-9a-fA-F]{24}$/))
    {
        let err = new Error('Invalid event ID');
        err.status = 400;
        return next(err);
    }
    let events = model.findById(id)
    .then(events =>
        {
            if(events)
            {
                return res.render('../views/edit', {events});
            }
            else
            {
                let err = new Error('Cannot find a event with id ' + id);
                err.status = 404;
                next(err);
            }
        })
    .catch(err=>next(err));
};

exports.update = (req, res) =>
{
    //Once udpated, it redirects back to the event1 page
    let events = req.body;
    let id = req.params.id;

    if(!id.match(/^[0-9a-fA-F]{24}$/))
    {
        let err = new Error('Invalid event ID');
        err.status = 400;
        return next(err);
    }

    model.findByIdAndUpdate(id, events, {useFindAndModify: false, runValidators: true})
    .then(events =>
        {
            if(events)
            {
                res.redirect('/events/'+id);
            }
            else
            {
                let err = new Error('Cannot find a event with id ' + id);
                err.status = 404;
                next(err);
            }
        })
    .catch(err=>next(err));
};

exports.delete = (req, res, next) =>
{
    //This deletes any event, refernced by mod 6 video
    let id = req.params.id;

    if(!id.match(/^[0-9a-fA-F]{24}$/))
    {
        let err = new Error('Invalid event ID');
        err.status = 400;
        return next(err);
    }

    model.findByIdAndDelete(id, {useFindAndModify: false})
    .then(events =>
        {
            if(events)
            {
                res.redirect('/events');
            }
            else
            {
                let err = new Error('Cannot find a event with id ' + id);
                err.status = 404;
                next(err);
            }
        })
    .catch(err=>
        { 
            if (err.name === 'ValidationError')
            {
                err.status = 400;
            }
            next(err)
        });
};

//module.exports = router;