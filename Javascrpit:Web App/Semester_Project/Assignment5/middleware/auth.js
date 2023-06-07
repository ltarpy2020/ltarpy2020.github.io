const Event = require('../models/events');
const user = require('../models/user');

//check if the user is a guest
exports.isGuest = (req, res, next) =>
{
    if(!req.session.user)
    {
        return next();
    }
    else
    {
        req.flash('error', 'You are logged in already');
        return res.redirect('/users/profile');
    }
};

//check if user is authenticated
exports.isLoggedin = (req, res, next) =>
{
    if(req.session.user)
    {
        return next();
    }
    else
    {
        req.flash('error', 'You need to log in first');
        return res.redirect('/users/login');
    }
};

//check if user is author
exports.isAuthor = (req, res, next) =>
{
    let id = req.params.id;
    Event.findById(id)
    .then(events=>{
        if(events) 
        {
            if(events.author == req.session.user) 
            {
                return next();
            } 
            else 
            {
                let err = new Error('Unauthorized to access the resource');
                err.status = 401;
                return next(err);
            }
        } 
        else 
        {
            let err = new Error('Cannot find a event with id ' + req.params.id);
            err.status = 404;
            return next(err);
        }
    })
    .catch(err=>next(err));
};