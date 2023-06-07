//require mods
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const eventRoute = require('./routes/eventRoute');
const userRoute = require('./routes/userRoute');
const aboutRoute = require('./routes/aboutRoute');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

//create application
const app = express();

//configure app
let port = 3000;
let host = 'localhost';
let url = 'mongodb+srv://ltarpy:demo123@cluster0.asqsow8.mongodb.net/ndba-project3';
app.set('view engine', 'ejs');

//connect to MongoDB
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
.then(client =>
    {
        const db = client.db('events');
        getCollection(db);
    })
.catch(err=>console.log(err.message));

//middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('tiny'));
app.use(methodOverride('_method'));

app.use(
    session({
        secret: "ajfeirf90aeu9eroejfoefj",
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({mongoUrl: 'mongodb://localhost:27017/demos'}),
        cookie: {maxAge: 60*60*1000}
        })
);

app.use(flash());

app.use((req, res, next) => {
    //console.log(req.session);
    res.locals.user = req.session.user||null;
    res.locals.errorMessages = req.flash('error');
    res.locals.successMessages = req.flash('success');
    next();
});

//getting homepage
app.get('/', (req, res) =>
{
    res.render('homepage');
});

app.use('/events', eventRoute);
app.use('/users', userRoute);

//getting about page
app.use('/info', aboutRoute);

//The Error handling
app.use((req, res, next) => {
    let err = new Error('The server cannot locate ' + req.url + '. Sorry :(');
    err.status = 404;
    next(err);

});

app.use((err, req, res, next) =>
{
    console.log(err.stack);
    if(!err.status)
    {
        err.status = 500;
        err.message = ("Internal server error");
    }
    
    res.status(err.status);
    res.render('error', {error: err});
});

app.listen(port, host, () =>
{
    console.log('Server is running on port', port);
});