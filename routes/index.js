var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
	console.log('in router index')
res.render('index')
})

module.exports = router;

