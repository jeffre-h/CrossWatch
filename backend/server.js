require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const movieRoutes = require('./routes/movies');

// express app
const app = express()

// middleware
app.use(express.json())

// routes
app.get('/', (req, res) => {
    res.send('Hello World');
})

app.use('/api/movies', movieRoutes);

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
