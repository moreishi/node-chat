var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  frist_name: String,
  last_name: String
});

var User = mongoose.model('User', userSchema);

module.exports = User;