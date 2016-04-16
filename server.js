/**
 * Created with IntelliJ IDEA.
 * User: Sushil
 * Date: 6/2/14
 * Time: 1:23 PM
 * To change this template use File | Settings | File Templates.
 */
var express = require('express');
var bodyParser=require("body-parser-json")
var app = express();
var fs = require('fs');
var http = require('http');
var moment = require('moment');
app.use(express.static(__dirname + '/public')); 	// set the static files location /public/img will be /img for users
// log every request to the console
app.use(bodyParser()); 						// have the ability to pull information from html in POST
//app.use(express.methodOverride());




exports.index = function(req, res) {
    console.log("req is----->"+req)
    console.log("response is----->"+res)
    // send moment to your ejs
    res.render('index', { moment: moment });
}



var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;

var db;


MongoClient.connect('mongodb://127.0.0.1/test', function (err, db1)
{
    if (err) throw err;
    db = db1;
//    var count = 0;
//    db.orders.find().forEach( function(d) { for(f in d) { count++; }
    console.log("total>>>>>");

    return db;
});




function find(callback) {
    var collection = db.collection('record');

    var count = 0;

   collection.find().toArray( function(err,d) {
       if (err) {
           console.log(err);
           callback(err);
           return;
       }

       for(f in d) { count++; }
       console.log("total>>>>>"+count)});
    collection.find().toArray(function (err, result) {
        if (err) {
            console.log(err);
            callback(err);
            return;
        }

        console.log("returning"+result)
        callback(null, JSON.stringify(result));
    });


}

function insert(name, id) {
    console.log("name>>>"+name)
    console.log("id>>>"+id)
    var collection = db.collection('record');
    collection.insert({name:name, id:id}, function (err, docs) {
        console.log("Error is:" + err);

    })
}
function deletedata(name) {
    var collection = db.collection('record');
    collection.remove({name:name}, function (err, docs) {
        console.log("Error is:" + err);

    })

}

function update(name, id) {
    var collection = db.collection('record');
    collection.update({name:name}, {"$set":{id:id}}, function (err, docs) {
        console.log("Error is:" + err);

    })
}


// configuration ===========================================

// config files


					// have the ability to simulate DELETE and PUT


//app.get('/', function (req, res) {
   // res.sendfile('./public/index.html');

//})


app.get('/response', function (req, res) {
    console.log("hello to response file");
    /* res.format({

     'application/json': function(){
     res.send(result2);
     }
     }); */

    res.sendfile('./public/html/response.html');


})

app.get('/insert', function (req, res) {
    console.log("hello to insert file");
    var name = req.param('name');
    var id = req.param('id');
    console.log("name " + name + " id " + id);
    insert(name, id);

    res.send("record successfully inserted")
});

app.get('/delete', function (req, res) {
    console.log("hello to delete file");
    var name = req.param('name');

    console.log("name " + name);
    deletedata(name);

    res.send("record successfully deleted")
});


app.get('/update', function (req, res) {
    console.log("hello to update file");
    var name = req.param('name');
    var id = req.param('id');


    console.log("name " + name);
    update(name, id);

    res.send("record successfully updated ")


});


app.get('/get', function (req, res) {

    var callback = function (err, result) {
        console.log("result >> " + JSON.stringify(result));
        res.format({

            'application/json':function () {
                res.send(result);

            }
        });
    }

    find(callback);

});




app.listen(5000);
console.log("server is runnign at 5000");