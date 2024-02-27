import React, { useState } from 'react';
import axios from 'axios';

function BookForm() {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/books', formData);
      console.log(response.data);
      // Clear form, handle success, etc.
    } catch (error) {
      console.error("Error adding book:", error.response);
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        required
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
      />
      <input
        type="text"
        required
        name="author"
        value={formData.author}
        onChange={handleChange}
        placeholder="Author"
      />
      <input
        type="text"
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Category (Optional)"
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description (Optional)"
      />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default BookForm;