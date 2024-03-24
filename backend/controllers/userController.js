const User = require('../models/userModel');
const { runPrompt, generatePrompt } = require('../services/openaiService');
const Watchlist = require('../models/Watchlist');

const registerUser = async (req, res) => {
  try {
    // Check if username already exists
    const userExists = await User.findOne({ username: req.body.username });
    if (userExists) {
      return res.status(400).json({ message: 'Username already taken' });
    }

    // Create a new user
    const user = new User({
      username: req.body.username,
      password: req.body.password,
      watchlists: [] // Adhering to your schema with watchlists
    });

    // Save the user in the database
    const newUser = await user.save();
    res.status(201).json({ message: 'User registered successfully', userId: newUser._id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
    try {
      const user = await User.findOne({ username: req.body.username });
      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }
  
      // Directly compare the passwords for simplicity
      if (req.body.password !== user.password) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
  
      // Simplified login successful response for demo purposes
      res.json({ message: "Login successful", username: user.username });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

const getUserInfo = async (req, res) => {
  try {
      // Assuming that the user's ID is passed via the URL as a parameter
      const user = await User.findById(req.params.userId);
      if (!user) {
      return res.status(404).json({ message: 'User not found' });
      }

      // Send back the user information, excluding sensitive data like the password
      const { password, ...userInfo } = user.toObject();
      res.json(userInfo);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
  };

const getUserWatchlists = async (req, res) => {
  try {
    const watchlists = await Watchlist.find({ owner: req.user._id }).populate('movies');
    res.json(watchlists);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getMovieRecommendations = async (req, res) => {
  try {
      // Assuming req.params.userId is how you're getting the user's ID
      const userId = req.params.userId;

      // Fetch watchlists for the user and populate both the watchlists and the movies within
      const watchlists = await Watchlist.find({ owner: userId })
          .populate('movies');

      if (!watchlists.length) {
          return res.status(404).json({ message: "No watchlists found for user." });
      }

      // Flatten the list of movies from all watchlists, if there are multiple
      let movies = [];
      watchlists.forEach(watchlist => {
          movies = [...movies, ...watchlist.movies.map(movie => movie.title)]; // Assuming you want titles for the prompt
      });

      // Generate the prompt for OpenAI based on these movies
      const prompt = generatePrompt(movies); // Ensure this function accepts an array of movie titles

      // Get recommendations from OpenAI
      const recommendations = await runPrompt(prompt);

      // Send the recommendations back to the client
      res.json({ recommendations });
  } catch (error) {
      console.error('Error getting movie recommendations:', error);
      res.status(500).json({ error: 'Failed to get movie recommendations' });
  }
};

module.exports = { 
    registerUser,
    loginUser,
    getUserInfo,
    getUserWatchlists,
    getMovieRecommendations,
};