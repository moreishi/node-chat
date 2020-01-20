const express = require('express');
const router = express.Router();

const User = require('../model/user');

router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/users', function (req, res) {
  res.send('User Page');
});

router.get('/users/:id', function (req, res) {
	console.log(req.params);
  res.send('User Detail');
});

router.get('/users/create', function (req, res) {
	
	var user = new User({ 
		first_anme: 'Caesar Ian',
		last_anme: 'Belza',
	});

	user.save(function(err, user) {
		if (err) return console.error(err);
		console.log(user);
	});

	res.send('User has been created');
});

module.exports = router;