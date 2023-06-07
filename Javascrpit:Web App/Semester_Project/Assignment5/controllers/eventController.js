const model = require('../models/events');
const {Router} = require('express');
const rsvp = require('../models/rsvp');

const r = Router();

//reference the mod 5 and 6 videos for this
exports.index = (req, res, next) =>
{
    //The events page is called event1
    model.find()
    .then(events => res.render('../views/event1', {events}))
    .catch(err => next(err));
};

//This is where the user/guest can get the RSVP
exports.rsvp = (req, res, next) =>
{
    let id = req.params.id;
    let btn1 = rsvp.statusField;
    let events = model.findById(id)
    .then(events =>
        {
            if(events)
            {
                req.flash('success', 'Thank you for the RSVP');
                return res.render('../views/rsvpUser', {events});
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
            req.flash('error', 'Could not create event');     
        }
        next(err);
    });
    req.flash('success', 'Created an event');
};

exports.show = (req, res, next) =>
{
    //the event details is called event2
    let id = req.params.id;
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
    let events = model.findById(id)
    .then(events =>
        {
            if(events)
            {
                return res.render('../views/edit', {events});
            }
            else
            {
                req.flash('error', 'Could not edit event');
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

    model.findByIdAndUpdate(id, events, {useFindAndModify: false, runValidators: true})
    .then(events =>
        {
            if(events)
            {
                req.flash('success', 'Edited an event');
                res.redirect('/events/'+id);
            }
            else
            {
                let err = new Error('Cannot find a event with id ' + id);
                req.flash('error', 'Could not edit event');
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


    model.findByIdAndDelete(id, {useFindAndModify: false})
    .then(events =>
        {
            if(events)
            {
                req.flash('success', 'Deleted an event');
                res.redirect('/events');
            }
            else
            {
                req.flash('error', 'Could not delete event');
                let err = new Error('Cannot find a event with id ' + id);
                err.status = 404;
                next(err);
            }
        })
    .catch(err=>
        { 
            if (err.name === 'ValidationError')
            {
                req.flash('error', 'Could not edit event');
                err.status = 400;
            }
            next(err)
        });
};

//module.exports = router;