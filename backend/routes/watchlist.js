const express = require('express');
const {
  createWatchlist,
  getWatchlist,
  updateWatchlist,
  deleteWatchlist
} = require('../controllers/watchlistController');

const router = express.Router();

// Create a new watchlist
router.post('/', createWatchlist);

// Get a specific watchlist by ID
router.get('/:id', getWatchlist);

// Update a watchlist by ID
router.put('/:id', updateWatchlist);

// Delete a watchlist by ID
router.delete('/:id', deleteWatchlist);

module.exports = router;
