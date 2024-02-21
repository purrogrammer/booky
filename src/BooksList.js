import React from 'react';

function BooksList({ books }) {
  return (
    <div>
      {books.map((book, index) => (
        <div key={index}>
          <h3>{book.title}</h3>
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
