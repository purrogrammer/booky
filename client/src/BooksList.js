import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function BooksList() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/api/books')
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  const handleEdit = (id) => {
    // Navigate to the edit form
    navigate(`/edit-book/${id}`);
  };

  const handleDelete = async (id) => {
    // Call the DELETE request
    await axios.delete(`/api/books/${id}`);
    // Remove the book from your state
    setBooks(books.filter(book => book._id !== id));
  };

  return (
    <div>
      {books && books.map(book => {
        // Convert the dateAdded string to a Date object
        let dateAdded = new Date(book.dateAdded);
        // Format the Date object to a string
        let formattedDate = dateAdded.toLocaleDateString();

        return (
          <div key={book._id}>
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Category: {book.category}</p>
            <p>Description: {book.description}</p>
            <p>Date Added: {formattedDate}</p> {/* Use the formatted date here */}
            <p>Submitted by: {book.submittedBy} </p> 

            <button onClick={() => handleEdit(book._id)}>Edit</button>
            <button onClick={() => handleDelete(book._id)}>Delete</button>

          </div>
        );
      })}
    </div>
  );
}

export default BooksList;