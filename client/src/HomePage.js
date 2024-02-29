import React, { useEffect, useState } from 'react';
import axios from 'axios';

function HomePage() {
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
      {books && books.map(book => {
        // Convert the dateAdded string to a Date object
        let dateAdded = new Date(book.dateAdded);
        // Format the Date object to a string
        let formattedDate = dateAdded.toLocaleDateString();

        return (
          <div key={book.id}>
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Category: {book.category}</p>
            <p>Description: {book.description}</p>
            <p>Date Added: {formattedDate}</p> {/* Use the formatted date here */}
          </div>
        );
      })}
    </div>
  );
}

export default HomePage;