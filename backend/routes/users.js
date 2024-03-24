const express = require('express');
const { 
    registerUser,
    loginUser,
} = require('../controllers/userController'); // Ensure correct path
const router = express.Router();

// Route for user registration
router.post('/register', registerUser);

// Route for user login
router.post('/login', loginUser);

module.exports = router;
