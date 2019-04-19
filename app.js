var express = require('express');
var app = express();
var path = require('path');
var request = require('request');
var port = 8030;

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => res.redirect('public'));

app.listen(port, () => console.log(`App listening on port ${port}!`));