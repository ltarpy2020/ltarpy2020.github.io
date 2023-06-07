//require mods
const  express = require('express');
const morgan = require('morgan');
const storyRoutes = require('./routes/storyRoutes');


//create application
const app = express();

//configure app
let port = 3002;
let host = 'localhost';
app.set('view engine', 'ejs');

//mount middleware
app.use(express.static('public'));
app.use(express.urlencoded({extneded: true}));
app.use(morgan('tiny'));

//set up routes
app.get('/', (req, res) =>
{
    res.render('index');
});

app.use('/stories', storyRoutes);

//set up server
app.listen(port, host, () =>
{
    console.log('port is running on', port);
});