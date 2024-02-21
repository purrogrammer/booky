import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BookForm from './BookForm';
import BooksList from './BooksList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [books, setBooks] = useState([]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/add-book">Add Book</Link>
      </nav>
      <Routes>
        <Route path="/add-book" element={<BookForm addBook={addBook} />} />
        <Route path="/" element={<BooksList books={books} />} />
      </Routes>
    </Router>
  );
}

export default App;
