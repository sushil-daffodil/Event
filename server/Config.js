var app = require("express")();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
var Q = require("q");
var MongoClient = require('mongodb').MongoClient
var Server = require('mongodb').Server;
var Db = require('mongodb').Db;
var ObjectID = require("mongodb").ObjectID;
var url = 'http://127.0.0.1:8080';
var db = new Db('test', new Server('192.168.100.21', 27023, { 'native_parser': true }));
cons = require("consolidate");
app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + "/Views");

var routes = require('./ConfigCheck')(app,db)

function errorHandler(err, req, res, next) {
    console.log(err.message)
    console.log(err.stack)
    res.status(500)
    res.render('error_template', {error: err})

}

app.use(errorHandler);
db.open(function (err, mongoclient) {
    app.listen(8080)
    console.log("Server is running on 8080")
})



