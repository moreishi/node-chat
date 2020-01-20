const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const User = require('../model/user');

router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/users', function (req, res) {

	User.find({}, function(err, result) {
		res.send(result);
	});
	
});

router.post('/users', [
		check('first_name'),
		check('last_name')
	],function (req, res) {
	
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	}

	var user = new User({ 
		first_name: req.body.first_name,
		last_name: req.body.last_name
	});

	user.save(function(err, data) {
		if (err) return console.error(err);
		res.send(data);
	});

	
});

router.get('/users/:id', function (req, res) {
	console.log(req.params);
  res.send('User Detail');
});

module.exports = router;