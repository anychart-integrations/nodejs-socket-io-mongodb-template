var path = require('path');
var io = require('socket.io');
var http = require('http');
var fs = require('fs');
var mongoose = require('mongoose');

var ErrorPage = require('error-page');
var Templar = require('templar');
var router = require('routes')();
var Fruit = require('./models/Fruit.js');

// set MongoDB connection
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/anychart_db');
mongoose.connection.on('error', console.error.bind(console, 'Connection error:'));

// template setting
var environment = 'development';
var config = require('./config/' + environment + '.js');
var templarOptions = { engine: config.engine, folder: config.templates };
Templar.loadFolder(config.templates);

// set routes
router.addRoute('/*', require('./routes/static.js'));
router.addRoute('/', require('./routes/index.js'));

// set server
var server = http.createServer(handler);
var io_server = io(server);
io_server.on('connection', function(client){
    console.log("connect: " + client);
    client.on('event', function(data){
        console.log("data: " + data);
    });
    client.on('disconnect', function(){
        console.log(("disconnect"))
    });
});
function handler (req, res) {
    res.error = ErrorPage(req, res, {
        404: 'not found!'
    });
    res.template = Templar(req, res, templarOptions);
    router.match(req.url).fn(req, res, config);
}
server.listen(3000);

// update chart data
setInterval(function(){
    console.log("hello");
    Fruit.find({}).select('name value -_id').sort({'value': -1}).limit(5).exec(function (err, fruits) {
        if (err) return next(err);
        io_server.emit('update', fruits );
    });
}, 2000);

console.log('Server Listening - http://localhost:' + config.port + '. ' + environment + ' environment');
module.exports = server;