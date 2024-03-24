const mongoose = require('mongoose');

const watchlistSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  name: String,
  movies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }],
//   likes: Number,
});

module.exports = {
  Watchlist: mongoose.model('Watchlist', watchlistSchema),
  watchlistSchema,
};