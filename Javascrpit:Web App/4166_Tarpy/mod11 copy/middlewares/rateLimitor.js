const rateLimit = require('express-rate-limit');

exports.logInLimitor = rateLimit(
{
    windowMs: 60*1000,
    max: 5,
    //message: "Too many login requests, try again later",
    handler: (req, res, next) =>
    {
        let err = new Error('Too many log in requests, try again later')
        err.staus = 429;
        return next(err);
    }
})