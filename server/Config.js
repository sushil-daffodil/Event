var express = require('express')
//var app = require("express")();
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
var Q = require("q");
var MongoClient = require('mongodb').MongoClient
var Server = require('mongodb').Server;
var Db = require('mongodb').Db;
var ObjectID = require("mongodb").ObjectID;
var url = 'http://127.0.0.1:8090';
var db = new Db('test', new Server('192.168.100.21', 27023, { 'native_parser': true }));
var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;
//cons = require("consolidate");
//app.engine('html', cons.swig);
//app.set('view engine', 'html');
//app.set('views', __dirname + "/Views");
console.log(__dirname)
var cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(express.static(__dirname + '/../public'));

var routes = require('./ConfigCheck')(app,db)
function errorHandler(err, req, res, next) {
    console.log(err.message)
    console.log(err.stack)
    res.status(500)
    res.render('error_template', {error: err})

}
app.use(errorHandler)
if (cluster.isMaster) {
    // Fork workers.
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
    cluster.on('fork', function (worker) {
        console.log('worker ' + worker.id + ' forked : ' + worker.process.pid);
    });
cluster.on('listening', function(worker, address)  {
    console.log("address>>>>"+JSON.stringify(address))
    console.log("`A worker is now connected to +" +address.address +" and "+address.port);
 });
    cluster.on('exit', function (worker) {
        var pid = worker.process.pid;
        console.log('worker ' + worker.id + ' died : ' + pid);
}).fail(function (err) {
    console.error("Error : " + err + " \n Stack : " + err.stack);
});
} else {
    db.open(function (err, mongoclient) {
        app.listen(3000)
        console.log("Server is running on 3000")
    })
}








