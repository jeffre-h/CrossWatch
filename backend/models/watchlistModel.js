const mongoose = require('mongoose');

const watchlistSchema = new mongoose.Schema({
  name: String,
  movies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }],
//   likes: Number,
});

module.exports = {
  Watchlist: mongoose.model('Watchlist', watchlistSchema),
  watchlistSchema,
};