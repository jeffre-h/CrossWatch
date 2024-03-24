const mongoose = require('mongoose');
const { watchlistSchema } = require('./watchlistModel'); 

const userSchema = new mongoose.Schema({
  username: String,
  password: String, // Just for prototype/demo, would be secure for real world application
  watchlists: [watchlistSchema],
});

module.exports = mongoose.model('User', userSchema);