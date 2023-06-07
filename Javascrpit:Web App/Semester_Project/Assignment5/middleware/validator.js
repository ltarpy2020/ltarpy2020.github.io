const {body} = require('express-validator');
const {validationResult} = require('express-validator');
const user = require('../models/user');

exports.validateId = (req, res, next)=>{
    let id = req.params.id;
    //an objectId is a 24-bit Hex string
    if(!id.match(/^[0-9a-fA-F]{24}$/)) {
        let err = new Error('Invalid story id');
        err.status = 400;
        return next(err);
    } else {
        return next();
    }
};

exports.validateSignUp = [body('firstName', 'First name cannot be empty').notEmpty().trim().escape(),
body('lastName', 'Last name cannot be empty').notEmpty().trim().escape(),
body('email', 'email must be a valid address').isEmail().trim().escape().normalizeEmail(),
body('password', 'password must be valid').isLength({min: 8, max: 64}).trim()];

exports.validateLogIn = [body('email', 'email must be a valid address').isEmail().trim().escape().normalizeEmail(),
body('password', 'password must be valid').isLength({min: 8, max: 64}).trim()];

exports.validateResult = (req, res, next) =>
{
    let errors = validationResult(req);
    if(!errors.isEmpty())
    {
        errors.array().forEach(error =>
            {
                req.flash('error', error.msg);
            });
        return res.redirect('back');
    }
    else
    {
        return next();
    }
}

exports.validateEvent = [body('category', 'Category cannot be empty').notEmpty().trim().escape().isIn(),
body('title', 'Title cannot be empty').notEmpty().trim().escape(),
body('description', 'Descrption cannot be empty and need to meet word limit').notEmpty().trim().escape().isLength({min: 10, max: 256}),
body('location', 'Location cannot be empty').notEmpty().trim().escape(),
body('host', 'Host cannot be empty').notEmpty().trim().escape(),
body('startDate', 'Date has to be legit').notEmpty().isAfter().isISO8601().escape().trim(),
body('endDate', 'Date has to be legit').notEmpty().isISO8601().escape().trim()];

exports.validateRSVP = [body('statusField', 'RSVP cannot be empty').notEmpty().trim().escape().isAfter().isIn(['Yes', 'No', 'Maybe'])];


const sd = new Date('startDate');
const ed = new Date('endDate');

const compareDates = (req, res, next) => 
{
    let err = new Error('Invalid dateTime');
    if(sd.getTime() < ed.getTime())
    {
        req.flash('error', err.msg);
        return res.redirect('/');
    }
    else
    {
        return next();
    }
};
//console.log(sd);
//console.log(ed);

exports.validateEndDate = compareDates;