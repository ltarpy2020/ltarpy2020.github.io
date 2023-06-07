const rateLimit = require('express-rate-limit');

exports.logInLimitor = rateLimit(
    {
        windowMs: 60 * 1000,
        max: 5,
        //message: "too many log in requests"
        handler: (req, res, next) =>
        {
            let err = new Error("too many log in requests");
            err.status = 429;
            return next(err);
        }
    });