const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// GET request to get all books
router.get('/books', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET request to get a single book by ID
router.get('/books/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST request to add a new book
router.post('/books', async (req, res) => {
  try {
    const book = new Book(req.body);
    const savedBook = await book.save();
    res.status(201).json(savedBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route to update a book
router.put('/books/:id', (req, res) => {
  const updatedBook = req.body;
  Book.findByIdAndUpdate(req.params.id, updatedBook, { new: true }) // 'new: true' returns the updated book
    .then(book => res.json(book))
    .catch(err => res.status(500).json({ error: err.message }));
});

// Route to delete a book
router.delete('/books/:id', (req, res) => {
  Book.findByIdAndRemove(req.params.id)
    .then(() => res.json({ message: 'Book deleted successfully' }))
    .catch(err => res.status(500).json({ error: err.message }));
});

module.exports = router;

