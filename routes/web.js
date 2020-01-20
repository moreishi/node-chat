const express = require('express');
const router = express.Router();

const mongoose = require('../mongoose/mongoose');
const home = require('../controller/home');
const user = require('../controller/user');
const chat = require('../controller/chat');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to mongodb!');
});

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

router.use(home);
router.use(user);
router.use(chat);

module.exports = router