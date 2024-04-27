import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditBook() {
  const [book, setBook] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/api/books/${id}`)
      .then(response => {
        console.log('Received book data from server:', response.data);
        setBook(response.data);
      })
      .catch(error => {
        if (error.response && error.response.status === 404) {
          console.error('Book not found!');
        } else {
          console.error('There was an error!', error);
        }
      });
  }, [id]);

  const handleChange = (event) => {
    setBook({ ...book, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`/api/books/${id}`, book)
      .then(() => {
        navigate('/');
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  if (!book) return null;

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" value={book.title} onChange={handleChange} />
      </label>
      <label>
        Author:
        <input type="text" name="author" value={book.author} onChange={handleChange} />
      </label>
      <label>
        Category:
        <input type="text" name="category" value={book.category} onChange={handleChange} />
      </label>
      <label>
        Description:
        <textarea name="description" value={book.description} onChange={handleChange} />
      </label>
      <label>
        Submitted By:
        <input type="text" name="submittedBy" value={book.submittedBy} onChange={handleChange} />
      </label>
      <button type="submit">Update Book</button>
    </form>
  );
}

export default EditBook;