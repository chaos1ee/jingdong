var express = require('express');
var path = require('path');
var port = process.env.PORT || 5000;

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, function () {
    console.log('listening on ' + port);
})