const User = require('../models/userModel');

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
  

module.exports = { 
    registerUser,
    loginUser,
};