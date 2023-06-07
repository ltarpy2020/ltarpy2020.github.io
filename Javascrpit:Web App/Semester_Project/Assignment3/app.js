//require mods
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const eventRoute = require('./routes/eventRoute');
const mongoose = require('mongoose');

//create application
const app = express();

//configure app
let port = 3003;
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

//getting homepage
app.get('/', (req, res) =>
{
    res.render('homepage');
});

//getting about page
app.get('/about', (req, res) =>
{
    res.render('about');
})

//getting contact page
app.get('/contact', (req, res) =>
{
    res.render('contact');
})

app.use('/events', eventRoute);

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