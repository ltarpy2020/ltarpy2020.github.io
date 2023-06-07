//require mods
const  express = require('express');
const morgan = require('morgan');
const storyRoutes = require('./routes/storyRoutes');
const methodOverride = require('method-override');


//create application
const app = express();

//configure app
let port = 3002;
let host = 'localhost';
app.set('view engine', 'ejs');

//mount middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('tiny'));
app.use(methodOverride('_method'));

//set up routes
app.get('/', (req, res) =>
{
    res.render('index');
});

app.use('/stories', storyRoutes);

//error handling
app.use((req, res, next) =>
{
    let err = new Error('The server cannot locate ' + req.url);
    err.status = 404;
    next(err);
});

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

//set up server
app.listen(port, host, () =>
{
    console.log('port is running on', port);
});