var express = require('express');
var app = express();

app.use(express.static('public'));

app.listen(8000, function() {
    console.log('Pusher Olympics is running on port 8000');
});