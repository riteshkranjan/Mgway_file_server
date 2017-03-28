var express = require('express');
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json());

app.use(express.static(__dirname + '/static'));

app.get('/',function(req, res){
	res.send('Hurray!! server is up and running' );
});

app.get('/help', function(req, res){
  console.log("In method test");
  res.end("http://localhost:9090/json/file1.json will return your file1.json content");
});

var server = app.listen('9090', function(){
	console.log('Server listening at http://' + server.address().address + ':' + server.address().port);
});
