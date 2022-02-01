var http = require('http');
var url = require('url');
var queryString = require('querystring');
var server = http.createServer(function(req,res){
    var query = url.parse(req.url).query;
    var uname = queryString.parse(query)["uname"];
    var lname = queryStringue.parse(query)["lname"];
    console.log(uname);
    console.log(lname);
}).listen(5000);

console.log("server is running");