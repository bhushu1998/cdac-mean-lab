const express = require('express');
const port = 9339;
const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html', err => err ? console.log(err) : false));
app.get('/login', (req, res) => res.sendFile(__dirname + '/login.html', err => err ? console.log(err) : false));

app.post('/validate', (req, res) => {

    var username = req.body.username;
    var password = req.body.password;

    if (username == 'suraj' && password == 'suraj')
        res.sendFile(__dirname + "/success.html", err => err ? console.log(err) : false);
    else
        res.sendFile(__dirname + "/error.html", err => err ? console.log(err) : false);
});

app.listen(port, () => console.log("Server running"));