var SELF = require('./ConfigDB.js')
var crt = require('crypto');
var Q = require("q");
var nodemailer = require('nodemailer');
var url = 'http://192.168.100.172:3000';
var ObjectID = require("mongodb").ObjectID;
var RESOLVE = require('requirejs');


exports.resolveFunction = function (path) {
    var d = Q.defer();
    //path = "./"+path+".js";
    RESOLVE([path], function (data) {
        d.resolve(data)
    })
    return d.promise
}
exports.Preinsert = function (insert, collectionName, db) {
    console.log("Pre insert method called>>>>>>>")
    if (insert) {
        return SELF.resolveFunction("public/Bl/BusinessLogicFile.js").
            then(function (data) {
                return data.beforeJob(insert, db).then(function (insert) {
                    return insert

                })

            })

    } else {
        var d = Q.defer();
        d.resolve(insert);
        return d.promise;
    }

}
exports.insert = function (insert, collectionName, db) {
    console.log("insert method called>>>>>>>")
   // return SELF.Preinsert(insert, collectionName, db).then(function (insert) {
        console.log("insert>>>>>>>" + JSON.stringify(insert))
        var Collection = db.collection(collectionName);
        var d = Q.defer();
        Collection.insert(insert, function (err, result) {
            if (err) {
                console.log("err>>>>>>>" + JSON.stringify(err))
                d.reject(err);
            }
            else {
                console.log("result>>>>>>>" + JSON.stringify(result))
                d.resolve(result);
            }
        })
        return d.promise;
  //  })
}

exports.find = function (params, collectionName, db) {
    var Collection = db.collection(collectionName);
    var limit = params.limit || 5;
    var sort = params.sort || {_id: 1};
    var skip = params.skip || 0;
    var filter = params.filter || {};
    var d = Q.defer();
    if (params.group || params.unwind) {
        console.log("group>>>>>>>" + JSON.stringify(params.group))
        var piplines = [];

        if (params.unwind) {
            piplines.push({"$unwind": params.unwind})
        }
        if (params.filter) {
            piplines.push({"$match": params.filter})
        }
        if (params.fields) {
            piplines.push({"$project": params.fields})
        }
        if (params.sort) {
            piplines.push({"$sort": params.sort})
        }
        if (params.group) {
            piplines.push({"$group": params.group})
        }
        console.log("piplines>>>>>>" + JSON.stringify(piplines))

        Collection.aggregate(piplines).toArray(function (err, result) {
            if (err) {
                d.reject(err);
            } else {
                console.log("result>>>>>>" + JSON.stringify(result))
                d.resolve(result);
            }
        });

    } else {
        console.log("filter>>>>>>>" + JSON.stringify(params.filter))
        Collection.find(filter).limit(limit).sort(sort).skip(skip).toArray(function (err, result) {
            console.log("result>>>>>>>" + JSON.stringify(result))

            if (err) {
                d.reject(err);
            } else {
                d.resolve(result);
            }
        });
    }
    return d.promise;

}

exports.Replicate = function (params, collectionName, db) {
    console.log("Pre insert method called>>>>>>>")
    if (params) {
        var Collection = db.collection(collectionName);
        var filter = params.filter || {};
        var update = params.update.$set;;
        if (!update) {
            d.reject("Nothing to update");
        }
        var arrayFilter=[];
        for(var c in update){
            arrayFilter.push(c)
        }
        var filter = {};
        filter["refcollection"] = collectionName;
        filter["set"] ={"$in":arrayFilter};
        filter["type"] ="fk";
        var para = {};
        para["filter"] = filter
        var collection = "pl.fields"
        return SELF.find(para, collection, db)
    .then(function (docs) {
                if (docs.length > 0) {
                    console.log("docs>>>>>" + JSON.stringify(docs))
                   for(var i=0;i<docs.length;i++){

                   }

                } else {

                }
            })


    } else {
        var d = Q.defer();
        d.resolve(insert);
        return d.promise;
    }

}

exports.update = function (params, collectionName, db) {
   // return SELF.Replicate(JSON.parse(JSON.stringify(params)), collectionName, db).then(function() {
        var d = Q.defer();
        var Collection = db.collection(collectionName);
        var filter = params.filter || {};
        var update = params.update;
        if (!update) {
            d.reject("Nothing to update");
        }
        var options = params.options || {};
        console.log("options >>>" + JSON.stringify(options));
        Collection.update(filter, update, options, function (err, result) {
            if (err) {
                d.reject(err);
            } else {
                d.resolve(result);
            }
        })
        return d.promise;
   // })

}

exports.delete = function (filter, collectionName, db) {
    var Collection = db.collection(collectionName);
    var d = Q.defer();
    Collection.remove(filter, function (err, result) {
        if (err) {
            d.reject(err);
        } else {
            d.resolve(result);
        }

    })
    return d.promise;

}


exports.insertNewUser = function (db, req, res) {
    var params = req.param('options');
    console.log("param>>>>" + JSON.stringify(params))
   // params = JSON.parse(params);
    var name = params.name;
    var pass = params.pass;
    var email = params.email;
    console.log("name>>>>" + name)
    console.log("pass>>>>" + pass)
    console.log("email>>>>" + email)
    var filter = {};
    filter["name"] = name;
    filter["email"] = email;
    var para = {};
    para["filter"] = filter
    var collection = "users"
    var details = []
    var token;
    return getToken().then(function (tokenP) {
        token = tokenP;
        return SELF.find(para, collection, db);
    }).then(function (docs) {
        var d = Q.defer();
        console.log("doc>>>>>>" + JSON.stringify(docs))
        details = docs;
        if (docs.length > 0) {
            console.log("details>>>>>" + JSON.stringify(details))
            console.log("user already exists")
            var json1={'name': name, 'pass': pass, email: email, 'msg': 'user already exists'}
            res.writeHead(200, {"Content-Type": "application/json"});
            var json = JSON.stringify(json1);
            res.end(json);
            d.resolve();

        } else {
            console.log("enter into the else condition>>>>>>>>>")
            console.log("token >>>>>>" + JSON.stringify(token))
            var para = {};
            para["name"] = name
            para["pass"] = pass, para["email"] = email, para["approvtoken"] = token, para["approve"] = false
            return SELF.insert(para, collection, db).then(function () {
                console.log("out form the insert function>>>>")
                var json1={
                    'name': name,
                    'pass': pass,
                    email: email,
                     code:200,
                    'msg': 'successfully inserted',
                    'token': token
                }
                res.writeHead(200, {"Content-Type": "application/json"});
                var json = JSON.stringify(json1);
                res.end(json);
                d.resolve();
            })

        }
        return d.promise;
    }).then(function () {
        if (details && details.length == 0) {
            console.log("Enter mailOptions")
            var mailOptions = {
                from: 'sushil.nagvan@daffodilsw.com', // sender address
                to: 'sushil.nagvan@daffodilsw.com', // list of receivers
                subject: 'Hello ', // Subject line
                text: 'node maller test', // plaintext body
                html: '<b>Hello ✔</b> <br><a href="' + url + '/approve?token=' + token + '">link </a>' // html body
            };
            console.log("mailOptions>>>>>>" + JSON.stringify(mailOptions))
            return sendMail(mailOptions);

        }
    })
}

function sendMail(mailOptions) {
    var d = Q.defer();
    console.log("mail send method called>>>>>")
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'sushil.nagvan@daffodilsw.com',
            pass: '074714018160'
        }
    });

    transporter.sendMail(mailOptions, function (err, info) {
        console.log("send mail called>>>>>")
        if (err) {
            d.reject(err);
            return;
        }
        console.log('Message sent: ' + info.response);
        d.resolve();

    });
    return d.promise;
}


function getToken() {
    var d = Q.defer();
    crt.randomBytes(12, function (ex, buf) {
        var token = buf.toString('hex');
        console.log("promise return >>>>>>")
        d.resolve(token);
    });
    return d.promise;
}

exports.loginPromise = function (db, req, res) {
    console.log("Cookies: ", req.cookies)
    var params = req.param('options');
    //params = JSON.parse(params);
    var name = params.name
    var pass = params.pass
    var filter = {};
    filter["name"] = name;
    filter["pass"] = pass;
    filter["approve"] = true;
    var token;
    var docs = [];
    return getToken().then(function (tokenP) {
        token = tokenP;
        var para = {};
        para["filter"] = filter
        var collection = "users"
        return SELF.find(para, collection, db);
    }).then(function (docsP) {
        console.log("doc>>>>>>" + JSON.stringify(docsP))
        var docs = docsP
        if (docs.length > 0) {
            var d = Q.defer();
            console.log("token >>>>>>" + JSON.stringify(token))
            if (docs[0].token) {
                token = docs[0].token
            }
            var filter = {};
            var id = new ObjectID(docs[0]._id.toString());
            filter["_id"] = id;
            var para = {};
            para["filter"] = filter;
            var collection = "users"
            var update = {};
            update["token"] = token;
            para["update"] = {$set: update}
            return SELF.update(para, collection, db).then(function (data) {
                console.log("out from update>>>>" + JSON.stringify(data));
              var json1= {
                    'name': docs[0].name,
                    'pass': docs[0].pass,
                    'msg': 'successfully login',
                    'token': token,
                        'code':200
                }
                res.cookie("token", token);
                res.writeHead(200, {"Content-Type": "application/json"});

                var json = JSON.stringify(json1);
                res.end(json);
                d.resolve();
            })


        } else {
            console.log("enter into the else>>>>>")
           var json1= {'msg': 'username or password not match'}
            res.writeHead(200, {"Content-Type": "application/json"});
            var json = JSON.stringify(json1);
            res.end(json);
            d.resolve();
        }
        return d.promise;
    })

};

exports.disconnectWithPromise = function (db, req, res) {
    var d = Q.defer();
    var token = null;
    SELF.validateToken(req, res, db).then(function (docs) {
        console.log("validateToken>>>>>>" + JSON.stringify(docs))
        if (docs && docs.validate && docs.token) {
            console.log("token >>>>>>" + JSON.stringify(docs.token))
            var filter = {};
            filter["token"] = docs.token;
            token = docs.token
            var para = {};
            para["filter"] = filter;
            var collection = "users"
            var update = {};
            update["token"] = null;
            para["update"] = {$unset: update}
            return SELF.update(para, collection, db).then(function () {
                console.log("out form there")
                var json1={'token': token, 'msg': 'successfully logout'}
                res.clearCookie("token")
                res.writeHead(200, {"Content-Type": "application/json"});
                var json = JSON.stringify(json1);
                console.log("final response is>>>")
                res.end(json);
                d.resolve();
            });
        } else {
            console.log("enter into the else>>>>>")
           var json1={'msg': 'username or password not match'}
            res.writeHead(200, {"Content-Type": "application/json"});
            var json = JSON.stringify(json1);
            res.end(json);
            d.resolve();
        }
        return d.promise;
    })

}

exports.validateToken = function (req, res, db) {
    console.log(req.cookies)
    var token = req.cookies && req.cookies.token ? req.cookies.token : undefined;
    var validate = {validate: false};
    var d = Q.defer();
    if (token) {
        //token = JSON.parse(token);
        var filter = {};
        filter["token"] = token;
        var para = {};
        para["filter"] = filter;
        var collection = "users"
        SELF.find(para, collection, db)
            .then(function (docsP) {
                console.log("docsP>>>>>" + JSON.stringify(docsP))
                if (docsP.length > 0) {
                    validate = {validate: true, token: token};
                    d.resolve(validate);
                } else {
                    d.resolve(validate);
                }

            })
    } else {
        d.resolve(validate);
    }
    return d.promise;

}


exports.approve = function (req, res, db) {
    var token = req.param('token');
    var filter = {};
    filter["approvtoken"] = token;
    var details = [];
    var para = {};
    para["filter"] = filter;
    var collection = "users"
    SELF.find(para, collection, db).then(function (docs) {
        var d = Q.defer();
        console.log("doc>>>>>>" + JSON.stringify(docs))
        details = docs;
        if (details.length > 0) {
            var filter = {};
            var id = new ObjectID(details[0]._id.toString());
            filter["_id"] = id;
            var para = {};
            para["filter"] = filter;
            var collection = "users"
            var update = {};
            var update2 = {};
            update2["approvtoken"] = null;
            update["approve"] = true;
            para["update"] = {$set: update, $unset: update2}

            return SELF.update(para, collection, db).then(function (data) {
                console.log("out from update>>>>" + JSON.stringify(data))

                var json1={
                    'name': details[0].name,
                    'pass': details[0].pass,
                    'msg': 'successfully Approved',
                    'token': token
                }
                res.writeHead(200, {"Content-Type": "application/json"});
                var json = JSON.stringify(json1);
                res.end(json);
                d.resolve();
            });

        } else {
            console.log("enter into the else>>>>>")
         var json1= {'msg': 'username or password not match'}
            res.writeHead(200, {"Content-Type": "application/json"});
            var json = JSON.stringify(json1);
            res.end(json);
            d.resolve();
        }
        return d.promise;
    })


}



