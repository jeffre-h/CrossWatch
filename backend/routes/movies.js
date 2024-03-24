const express = require('express');
const {
  getMovies,
  getMovie,
  syncMoviesWithTMDB // Import the syncing function from your controller
} = require('../controllers/movieController');

const router = express.Router();

// Sync movies with TMDB API
router.get('/sync-tmdb', syncMoviesWithTMDB);

// GET all movies
router.get('/', getMovies);

// GET a single movie
router.get('/:id', getMovie);


module.exports = router;
