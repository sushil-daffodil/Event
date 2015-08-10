/**
 * Created with IntelliJ IDEA.
 * User: Sushil
 * Date: 5/3/14
 * Time: 11:48 AM
 * To change this template use File | Settings | File Templates.
 */
/**
 * Created with IntelliJ IDEA.
 * User: Sushil
 * Date: 5/2/14
 * Time: 1:23 PM
 * To change this template use File | Settings | File Templates.
 */
var express = require('express');
var app = express();
var fs=require('fs');
app.use(express.static(__dirname + '/public')); 	// set the static files location /public/img will be /img for users
// log every request to the console
app.use(express.bodyParser()); 						// have the ability to pull information from html in POST
app.use(express.methodOverride()); 					// have the ability to simulate DELETE and PUT


app.get('/',function(req,res){
    res.sendfile('./public/index.html');
})

app.get('/processform1',function(req,res){

    var name=req.param('name');
    var zipcode=req.param('zipcode');
    var gender=req.param('gender');
    var country=req.param('country');
    var phone=req.param('phone');
    var password=req.param('password');
    console.log("name:- "+name+", zipcode:- "+zipcode+", gender:- "+gender+", country:- "+country+", phone:- "+phone+", password:- "+password );




})
app.get('/home', function(req, res){
    console.log("ur at home page");

    var content;
    fs.readFile('./public/html/partial-home.html', 'utf8', function (err,data) {
        if (err) {
            console.log(err);
            return console.log(err);
        }
        content=data;
        console.log("page html is:- "+content);
        res.send(content);
    });
});

app.get('/register', function(req, res){
    console.log("ur at register page");

    var content;
    fs.readFile('./public/html/register.html', 'utf8', function (err,data) {
        if (err) {
            console.log(err);
            return console.log(err);
        }
        content=data;
        console.log("page html is:- "+content);
        res.send(content);
    });
});

app.get('/home.list', function(req, res){

    console.log("ur at home.log page");

    var content;
    fs.readFile('./public/html/partial-home-list.html', 'utf8', function (err,data) {
        if (err) {
            console.log(err);
            return console.log(err);
        }
        content=data;
        console.log("page html is "+content);
        res.send(content);
    });
});

app.get('/home.paragraph', function(req, res){

    console.log("ur at home.paragraph page");

    var content;
    fs.readFile('./public/html/partial-about.html', 'utf8', function (err,data) {
        if (err) {
            console.log(err);
            return console.log(err);
        }
        content=data;
        console.log("page html is "+content);
        res.send(content);
    });

});

app.get('/table-data', function(req, res){

    console.log("ur at partial about page");

    var content;
    fs.readFile('./public/html/partial-about.html', 'utf8', function (err,data) {
        if (err) {
            console.log(err);
            return console.log(err);
        }
        content=data;
        console.log("page html is "+content);
        res.send(content);
    });

});


app.get('/partial-about', function(req, res){

    console.log("ur at table.data page");

    var content;
    fs.readFile('./public/html/table-data.html', 'utf8', function (err,data) {
        if (err) {
            console.log(err);
            return console.log(err);
        }
        content=data;
        console.log("page html is "+content);
        res.send(content);
    });

});

















app.listen(5000);
console.log("server is runnign at 5000");