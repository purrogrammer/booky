const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  category: String,
  description: String,
  dateAdded: { type: Date, default: Date.now },
  submittedBy: { type: String, required: false }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
