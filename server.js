const express = require('express');
const app = express();
const server = require('http').createServer(app);
const bodyParser = require('body-parser');
const io = require('socket.io')(server);
const path = require('path');
const port = 3000;
global.appRoot = path.resolve(__dirname);

const routes = require('./routes/web');
const socket = require('./socket/io')(io);

var users = [];
var online_users = 0;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(routes);

server.listen(port, () => console.log(`Example app listening on port ${port}!`));