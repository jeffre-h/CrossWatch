const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema({
  tmdbId: {
    type: Number,
    required: true,
    unique: true // Assuming tmdbId is the unique identifier from TMDB
  },
  title: {
    type: String,
    required: true
  },
  overview: {
    type: String,
    required: true
  },
  poster_path: {
    type: String,
    required: false // Not all movies might have a poster path
  },
  release_date: {
    type: Date,
    required: false // Not all movies might have a release date
  },
  genre_ids: [{
    type: Number,
    required: false // Genres are represented by their IDs
  }],
  vote_average: {
    type: Number,
    required: false
  },
  popularity: {
    type: Number,
    required: false
  }
}, { timestamps: true });

module.exports = mongoose.model('Movie', movieSchema);
