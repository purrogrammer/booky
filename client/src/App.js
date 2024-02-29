import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage'; 
import BookForm from './BookForm';
import BooksList from './BooksList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-book" element={<BookForm />} />
        <Route path="/book-list" element={<BooksList />} />
      </Routes>
    </Router>
  );
}

export default App;
