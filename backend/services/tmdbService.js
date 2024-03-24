const axios = require('axios');
require('dotenv').config();

const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_API_KEY = process.env.TMDB_API_KEY;

const fetchMoviesFromTMDB = async (page = 1) => { // Default to page 1 if no argument is provided
    try {
        const response = await axios.get(`${TMDB_BASE_URL}/discover/movie`, {
            params: {
                api_key: TMDB_API_KEY,
                sort_by: 'popularity.desc',
                page, // Use the passed page number in the request
            },
        });
        return response.data.results;
    } catch (error) {
        console.error("Error fetching from TMDB:", error);
        throw error;
    }
};

module.exports = { fetchMoviesFromTMDB };
