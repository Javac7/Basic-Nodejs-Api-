var express = require('express');
var http    = require('http');
var app = express();



app.use(function(req, res, next) {

  next();
});


var httpPort = 9000;

//api router
app.get('/api/home', function (req, res) {
 
});




var server = http.createServer(app);
server.timeout = 15000;

server.listen(httpPort, function () {
  console.log("Server started!");
});