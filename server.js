var express = require('express');

var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, "./static")));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render("index");
});

app.post('/result', function(req, res) {
 console.log("POST DATA", req.body);
 res.render('result' , {survey: req.body});
});

app.listen(8000, function() {
 console.log('listening on port 8000');
});