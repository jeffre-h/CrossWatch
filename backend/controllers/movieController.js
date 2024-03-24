const Movie = require('../models/movieModel');
const { fetchMoviesFromTMDB } = require('../services/tmdbService'); // Assuming you have this service

// Controller for syncing movies with TMDB
async function syncMoviesWithTMDB(req, res) {
  try {
    const moviesFromTMDB = await fetchMoviesFromTMDB();
    // Example operation: iterate and upsert movies
    for (const movieData of moviesFromTMDB) {
      await Movie.findOneAndUpdate(
        { tmdbId: movieData.id }, 
        movieData, 
        { upsert: true, new: true, setDefaultsOnInsert: true }
      );
    }
    console.log("Movies synced successfully");
    res.json({ message: "Movies synced successfully" });
  } catch (error) {
    console.error('Sync error:', error);
    res.status(500).json({ error: 'Failed to sync movies with TMDB' });
  }
}

// Function to get all movies from the database
const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find({});
    res.status(200).json(movies);
  } catch (error) {
    console.error('Error fetching movies:', error);
    res.status(500).json({ error: 'Failed to fetch movies' });
  }
};

// Function to get a single movie by tmdbId from the database
const getMovie = async (req, res) => {
  try {
    const movie = await Movie.findOne({ tmdbId: req.params.id });
    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }
    res.status(200).json(movie);
  } catch (error) {
    console.error('Error fetching the movie:', error);
    res.status(500).json({ error: 'Failed to fetch the movie' });
  }
};

module.exports = {
  syncMoviesWithTMDB,
  getMovies,
  getMovie,
};
