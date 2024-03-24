const Movie = require('../models/movieModel');
const { fetchMoviesFromTMDB } = require('../services/tmdbService'); 

// Controller for syncing movies with TMDB
async function syncMoviesWithTMDB(req, res) {
  try {
    let page = 1;
    const totalPages = 1000; 
    while (page <= totalPages) {
      const moviesFromTMDB = await fetchMoviesFromTMDB(page); 
      for (const movieData of moviesFromTMDB) {
        await Movie.findOneAndUpdate(
          { tmdbId: movieData.id },
          movieData,
          { upsert: true, new: true, setDefaultsOnInsert: true }
        );
      }
      console.log(`Movies from page ${page} synced successfully`);
      page++;
    }
    res.json({ message: `Movies from pages 1 to ${totalPages} synced successfully` });
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

// Function to get the 10 most popular movies
const getPopularMovies = async (req, res) => {
  try {
    const movies = await Movie.find({}).sort({ popularity: -1 }).limit(10);
    res.status(200).json(movies);
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    res.status(500).json({ error: 'Failed to fetch popular movies' });
  }
};

module.exports = {
  syncMoviesWithTMDB,
  getMovies,
  getMovie,
  getPopularMovies,
};
