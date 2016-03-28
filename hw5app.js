var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	next();
});

var htmlData =
{
	Picture :['p01','p02','p03','p04','p05','p06','p07','p08','p09','p10','p11','p12'],
	Tittle:['PAPERLIFE','TREE OF JUSTICE','WHERE IS MY RING','COCOPUN','DREAM OF ART','SHADOW CIRCUS','I²SCIENCE','TIME','UNANUS','RUNNING RABBIT','Island of Sorcery','Morz']

}


app.get('/', function(req, res) {
	res.render('index',htmlData);
});


app.listen(port);
