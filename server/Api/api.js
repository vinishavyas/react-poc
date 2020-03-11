var express = require("express");
var app = express();
var http = require("http");
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// http.createServer(function(req, res){
   // res.writeHead(200, {'Content-Type': 'text/plain'});
   // res.end('Hello World\n');
// }).listen("8081");

app.get('/', function(req, res){
	res.send("Server testing with express.");
});

// This responds a GET request for the /list_user page.
app.get('/list_user', function (req, res) {
   console.log("Got a GET request for /list_user");
   res.send('Page Listing');
})

app.post('/register', urlencodedParser ,function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.body.name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})


console.log("server running at 8081 port.");