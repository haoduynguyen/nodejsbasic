var express = require('express');
var bcrypt = require('bcryptjs')
var bodyParser = require('body-parser')
var app = express();
app.use(bodyParser.urlencoded({extended: false}));
var connectDB = require('./database.js');
var DB = connectDB;
// var a = app.use(express.static(__dirname + 'public'))
app.get('/', function (req, res) {
    DB.query('select * from users', function (err, data) {
        if (err) throw err
        res.send(data);
    })
})
app.get('/add-user', function (req, res) {
    res.sendFile('index.html', {"root": __dirname})
});

app.post('/create-user', function (req, res) {
    let password = (bcrypt.hashSync(req.body.password));
    let email = req.body.email
    var sql = `INSERT INTO users (email,password) VALUES ("${email}","${password}")`;
    DB.query(sql, function (err, data) {
        if (err) throw err
        return res.sendStatus(200)
        console.log("1 record inserted");
    })
})

var server = app.listen(5000);