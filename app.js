var express = require('express');
var app = express();
var path = require('path');
var request = require('request');
var port = 8030;

app.use(express.static(path.join(__dirname, 'public')));
// Get request to me from index.html
app.get('/', function(req, res) {
  res.render('index');
});

app.listen(port, () => console.log(`App listening on port ${port}!`));