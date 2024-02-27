import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookForm from './BookForm';
import BooksList from './BooksList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/add-book" element={<BookForm />} />
        <Route path="/" element={<BooksList />} />
      </Routes>
    </Router>
  );
}

export default App;
