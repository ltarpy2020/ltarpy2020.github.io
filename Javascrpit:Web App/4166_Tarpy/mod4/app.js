const express = require('express');
const app = express();
const ejs = require('ejs');
//const {v4: uuidv4} = require('uuid');

let port = 3000;
let host = 'localhost';

app.set('view engine', 'ejs');

let students = [
    {id: '1', name: 'Tarpy', major: 'computer science', gpa: 3.2}, 
    {id: '2', name: 'Alice', major: 'Bio', gpa: 3.1}, 
    {id: '3', name: 'Tim', major: 'Chem', gpa: 2.7}
];


app.use(express.static('mod4'));

app.use((res, req, next) =>
{
    console.log(req.method);
    console.log(req.url);
    next();
});

app.get('/', (req, res) =>
{
    //res.send('Home Page');
    //console.log(__dirname);
    console.log(req.url);
    console.log(req.query);
    res.sendFile('./views/index.html',{root: __dirname });
});

app.get('/students/create', (req, res) =>
{
    res.sendFile('./views/new.html',{root: __dirname });
});

app.get('/students/:sid', (req, res) =>
{
    let id = req.params.sid;
    //res.send('Send student with id');
    let student = students.find(element => element.id === id);
    res.render('students', {student: student});
});

app.get('/about', (req, res) =>
{
    res.send('About Page');
});
app.get('/contact', (req, res) =>
{
    res.send('Contact Page');
});

app.get('/contact-us', (req, res) =>
{
    res.redirect('/contact');
});
app.use((req, res, next) =>
{
    res.status(404).send('Page cannot be found');
});

app.listen(port, host, () =>
{
    console.log('The server is running on port', port);
});