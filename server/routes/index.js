/**
 * Created by user on 10/30/15.
 */
var express = require('express');
var router = express.Router();
var path = require('path');

var employeeInfo = require('../createemployee');

router.get('/people', function(request, response){
    response.send(employeeInfo());
});

router.get('/*', function(request, response){
    var file = request.params[0] || "index.html";
    response.sendFile(path.join(__dirname, "../public/", file))
});

module.exports = router;