import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BooksList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('/api/books')
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  return (
    <div>
      {books && books.map(book => (
        <div key={book.id}>
          <h2>{book.title}</h2>
          <p>Author: {book.author}</p>
          <p>Category: {book.category}</p>
          <p>Description: {book.description}</p>
          <p>Date Added: {book.dateAdded.toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
}

export default BooksList;