const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const port = 8080;
const host = 'localhost';

const server = http.createServer((req, res) =>
{
    const num = _.random(0, 20);
    console.log(num);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    let path = './views';

    if (req.url === '/contact')
    {
        path = path + '/contact.html';
    }
    else if (req.url === '/about')
    {
        path = path + '/about.html';
    }
    else
    {
        res.statusCode = 404;
        path = path + '/404.html';
    }

    fs.readFile(path, (err, data) =>
    {
        if(err)
        {
            console.log(err);
            res.end();
        }
        else
        {
            res.write(data);
            res.end();
        }
    })
});

server.listen(port, host, () =>
{
    console.log("The server is running on port", port);
});