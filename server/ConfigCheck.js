var con = require('./ConfigDB.js');
module.exports = function (app, db) {
   // http://127.0.0.1:8080/insert?options={"name":"sushil","pass":"123","email":"sushil.nagvan@daffodilsw.com"}
        app.all('/insert', function (req, res) {
            return con.insertNewUser(db, req, res)

        }),
            app.all('/', function (req, res) {
                res.render('login')

            }),
           // http://127.0.0.1:8080/connect?options={"name":"sushil","pass":"123"}
            app.all('/connect', function (req, res, next) {

                return con.loginPromise(db, req, res)

            }),
          //  http://127.0.0.1:8080/disconnectWithPromise?token="ac5a1887b57f306f26575e29"
            app.all('/disconnectWithPromise', function (req, res, next) {

                return con.disconnectWithPromise(db, req, res)
            })
    app.all('/approve', function (req, res, next) {
        http://127.0.0.1:8080/approve?token=35e0a148c63d9d29b0789010
        return con.approve(req, res, db)

    })
}