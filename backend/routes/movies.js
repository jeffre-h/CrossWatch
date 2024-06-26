const express = require('express');
const {
  getMovies,
  getMovie,
  syncMoviesWithTMDB,
  getPopularMovies, 
} = require('../controllers/movieController');

const router = express.Router();

// Sync movies with TMDB
router.get('/sync-tmdb', syncMoviesWithTMDB);

// GET 10 popular movies
router.get('/popular', getPopularMovies);

// GET all movies
router.get('/', getMovies);

// GET a single movie
router.get('/:id', getMovie);


module.exports = router;
