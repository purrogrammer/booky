require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const bookRoutes = require('./routes/bookRoutes');
const cors = require('cors'); 

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); 
app.use(express.json());
app.use('/api', userRoutes); 
app.use('/api', bookRoutes);

  // Connect to MongoDB
const dbURI = "mongodb+srv://purrogrammer:8W7-UfT_BiRrszj@booky.b4ucazl.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(dbURI)
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch((err) => console.log(err));

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});