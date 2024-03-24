const { Watchlist } = require('../models/watchlistModel'); 

// Create a new watchlist
const createWatchlist = async (req, res) => {
  try {
    const watchlist = new Watchlist({
      owner: req.user._id,
      name: req.body.name,
      movies: req.body.movies, // Expect an array of movie IDs
    });
    await watchlist.save();
    res.status(201).json(watchlist);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Retrieve a specific watchlist by ID
const getWatchlist = async (req, res) => {
  try {
    const watchlist = await Watchlist.findById(req.params.id).populate('movies');
    if (!watchlist) {
      return res.status(404).json({ message: 'Watchlist not found' });
    }
    res.status(200).json(watchlist);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateWatchlist = async (req, res) => {
    try {
      const watchlist = await Watchlist.findOne({ _id: req.params.id, owner: req.user._id });
      if (!watchlist) {
        return res.status(404).json({ message: 'Watchlist not found or user not authorized' });
      }
  
      // Update watchlist fields here...
      watchlist.name = req.body.name || watchlist.name;
      watchlist.movies = req.body.movies || watchlist.movies;
      await watchlist.save();
  
      res.status(200).json(watchlist);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
const deleteWatchlist = async (req, res) => {
    try {
        const watchlist = await Watchlist.findOneAndDelete({ _id: req.params.id, owner: req.user._id });
        if (!watchlist) {
        return res.status(404).json({ message: 'Watchlist not found or user not authorized' });
        }

        res.status(200).json({ message: 'Watchlist deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
    };
  

module.exports = {
  createWatchlist,
  getWatchlist,
  updateWatchlist,
  deleteWatchlist,
};
