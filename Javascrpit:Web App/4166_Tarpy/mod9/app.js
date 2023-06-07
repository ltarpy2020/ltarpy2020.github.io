//require modules
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const User = require('./models/user');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

//create app
const app = express();

//configure app
let port = 3000;
let host = 'localhost';
let url = 'mongodb://localhost:27017/demos'
app.set('view engine', 'ejs');

//connect to database
mongoose.connect(url, 
                {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
.then(()=>{
    app.listen(port, host, ()=>{
        console.log('Server is running on port', port);
    });
})
.catch(err=>console.log(err.message));

//mount middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('tiny'));

app.use(session(
    {
        secret: 'shsehnsfs3rwe',
        resave: false,
        saveUninitialized: false,
        cookie: {maxAge: 60*60*1000},
        store: new MongoStore({mongoUrl: url})
    }
));

app.use(flash());

app.use((req, res, next) =>
{
/*     if(!req.session.counter)
    {
        req.session.counter = 1;
    }
    else
    {
        req.session.counter++;
    } */
    console.log(req.session);
    res.locals.successMessages = req.flash('success');
    res.locals.errorMessages = req.flash('error');
    next();
})

//set up routes
app.get('/', (req, res)=>{
    res.render('index');
});

app.get('/new', (req, res) =>
{
    res.render('new');
});

app.post('/', (req, res, next) =>
{
    let user = new User(req.body);
    user.save()
    .then(() => res.redirect('/login'))
    .catch(err=> 
        {
            if(err.name === 'ValidationError')
            {
                req.flash('error', err.message);
                return res.redirect('/new');
            }
            if(err.code === 11000)
            {
                req.flash('error', 'email is not unique');
                return res.redirect('/new');
            }
            next(err);
        });
});

app.get('/login', (req, res) =>
{
    res.render('login');
    console.log(req.flash());
});

app.post('/login', (req, res, next) =>
{
    let email = req.body.email;
    let password = req.body.password;

    User.findOne({email: email})
    .then(user =>
        {
            if(user)
            {
                user.comparePassword(password)
                .then(result =>
                    {
                        if (result)
                        {
                            req.session.user = user._id;//stores user's id in session
                            req.flash('success', 'you have sucessfully logged in');
                            res.redirect('/profile');
                        }
                        else
                        {
                            console.log('wrong password');
                            req.flash('error', 'Wrong password');
                            res.redirect('/login');
                        }
                    })
            }
            else
            {
                console.log('wrong email address');
                req.flash('error', 'Wrong email');
                res.redirect('/login');
            }
        })
    .catch(err => next(err));
});

app.get('/profile', (req, res) =>
{
    let id = req.session.user;
    console.log(req.flash());
    User.findById(id)
    .then(user=>res.render('profile', {user}))
    .catch(err=>next(err));
});

app.get('/logout', (req, res, next) =>
{
    req.session.destroy(err =>
        {
            if(err)
            {
                return next(err);
            }
            else
            {
                res.redirect('/');
            }
        });
});

app.use((req, res, next) => {
    let err = new Error('The server cannot locate ' + req.url);
    err.status = 404;
    next(err);

});

app.use((err, req, res, next)=>{
    console.log(err.stack);
    if(!err.status) {
        err.status = 500;
        err.message = ("Internal Server Error");
    }

    res.status(err.status);
    res.render('error', {error: err});
});
