const express = require('express');
const { 
    registerUser,
    loginUser,
    getUserInfo,
    getUserWatchlists,
    getMovieRecommendations
} = require('../controllers/userController'); // Ensure correct path
const router = express.Router();

// Route for user registration
router.post('/register', registerUser);

// Route for user login
router.post('/login', loginUser);

// Route for user info
router.get('/info', getUserInfo);

// Route for user watchlists
router.get('/watchlists', getUserWatchlists);

router.get('/users/:userId/recommendations', getMovieRecommendations);

module.exports = router;
