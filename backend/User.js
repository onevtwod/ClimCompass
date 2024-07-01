// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  favorites: [{ type: String }]
});

module.exports = mongoose.model('User', userSchema);