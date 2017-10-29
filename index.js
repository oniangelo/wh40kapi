var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;


const sqlite3 = require('sqlite3').verbose();

bodyParser = require('body-parser');



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./routes/wh40kabRoutes'); //importing route
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

routes(app); //register the route



db = new sqlite3.Database('./db/ArmyList.sqlite', (err) => {
    if (err) {
        console.error(err.message);
    }
    app.listen(port);

    console.log('wh40karmy builder RESTful API server started on: ' + port);
    console.log('Connected to the armylist database.');
});