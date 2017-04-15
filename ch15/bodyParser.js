var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.listen(3000);

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.post('/', function (req, res) {
    var title = req.body.title;
    var message = req.body.message;   
    
    res.send('title : ' + title + ' message : ' + message);
     
});


