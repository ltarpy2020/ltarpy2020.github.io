const Event = require('../models/events');

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
/*   exports.isAuthor = (req, res, next) =>
{
    let id = req.params.id;
    if(!id.match(/^[0-9a-fA-F]{24}$/)) {
        let err = new Error('Invalid event id');
        err.status = 400;
        return next(err);
    }

    Event.findById(id)
    .then(event =>
        {
            if(event)
                {
                if(event.host == req.session.user)
                {
                    return next();
                }
                else
                {
                    let err = new Error('Unhandled to access of resource')
                    err.status = 401;
                    return next(err);
                }
            }
            else
            {
                let err = new Error('Cannot find a event with id ' + id);
                err.status = 404;
                next(err);
            }
        })
    .catch();
};   */