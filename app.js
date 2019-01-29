var express=require('express');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');

var app = express();
var index = require('./routes/index');

app.set('view engine', 'ejs');


app.use('/index', index);

app.get('/', function(req,res){
	console.log('in root');
res.end('hello in root');
});



app.listen(3000);