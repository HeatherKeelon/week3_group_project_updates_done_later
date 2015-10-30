//var http = require('http');
var express = require('express');
var app = express();
var path = require('path');
var index = require('./server/routes/index');

var employeeInfo = require('./server/createemployee');

app.use('/', index);

app.set('port', (process.env.PORT || 5000));

app.listen(5000);

//http.createServer(function(request, response){
//    response.writeHead(200);
//    response.write(employeeInfo());
//    response.end();
//}).listen(8000);
//
//module.exports = http;