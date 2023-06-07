//require mods
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const eventRoute = require('./routes/eventRoute');

//create application
const app = express();

//configure app
let port = 3003;
let host = 'localhost';
app.set('view engine', 'ejs');

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
});

//getting contact page
app.get('/contact', (req, res) =>
{
    res.render('contact');
})

app.use('/events', eventRoute);

app.use((err, req, res, next) =>
{
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