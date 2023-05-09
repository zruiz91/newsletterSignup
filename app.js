
const express = require('express');

const bodyParser = require('body-parser');

const request = require('request');

const https = require('https');

const app = express();

app.listen(3000);

app.get('/', function(req, res) {
    console.log('listening on 30000.');
});