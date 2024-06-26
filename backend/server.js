require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const movieRoutes = require('./routes/movies');
const userRoutes = require('./routes/users');
const watchlistRoutes = require('./routes/watchlist');

// express app
const app = express()

// middleware
app.use(express.json())
app.use(cors()); 

// routes
app.get('/', (req, res) => {
    res.send('Hello World');
})

app.use('/api/movies', movieRoutes);

app.use('/api/users', userRoutes);

app.use('/api/watchlist', watchlistRoutes);

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  })
