const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // for parsing application/json

// Connect to MongoDB
const dbURI = "mongodb+srv://purrogrammer:pyQlDqiNtEAuRlXb@booky.b4ucazl.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch((err) => console.log(err));

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// more routes and logic for handling books here

