import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './css/BooksList.css'; 
import './css/global.css'; 

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
    <div className='container'>
      {books && books.map(book => {
        // Convert the dateAdded string to a Date object
        let dateAdded = new Date(book.dateAdded);
        // Format the Date object to a string
        let formattedDate = dateAdded.toLocaleDateString();

        return (
          <div key={book._id} className='book-row row'>
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Category: {book.category}</p>
            <p>Description: {book.description}</p>
            <p>Date Added: {formattedDate}</p> 
            <p>Submitted by: {book.submittedBy} </p> 
          <div className='buttonRow'>
              <button className='btn btn-sm btn-primary bookButton pr-2' id='editButton' onClick={() => handleEdit(book._id)}>Edit</button>
              <button className='btn btn-sm btn-warning bookButton pr-2' id='deleteButton' onClick={() => handleDelete(book._id)}>Delete</button>
            </div>
          </div>
        );                 
      })}
    </div>
  );
}

export default BooksList;
