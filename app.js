var express = require('express');
var app = express();
var getData = require('./mongodb3');

app.get('/', (req, res) => {
    res.send('hello word');
})
app.get('/user', (req, res) => {
    getData(function(data) {
        res.json(data);
    });
})
app.listen(3000, () => {
    console.log(3000)
})
