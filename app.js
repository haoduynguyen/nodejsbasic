var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.get('/', function (req, res) {
    console.log('aa');
    res.sendFile('index.html',{"root": __dirname})
});

app.post('/submit-student-data', function (req, res) {
    console.log(req.body);
    var name = req.body.firstName + ' ' + req.body.lastName
    res.send(name + ' Submitted Successfully!');
});

app.put('/update-data', function (req, res) {
    res.send('PUT Request');
});

app.delete('/delete-data', function (req, res) {
    res.send('DELETE Request');
});

var server = app.listen(5000, function () {
    console.log('node server is running ..');
})