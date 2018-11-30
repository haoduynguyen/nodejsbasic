var app = require('express')
var mySql = require('mysql')

var connection = mySql.createConnection( {
    host     : 'localhost',
    user     : 'root',
    password : '',
    database: 'nodejs'
})
connection.connect()
module.exports = connection