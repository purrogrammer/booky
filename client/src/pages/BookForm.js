import React, { useState } from 'react';
import axios from 'axios';

function BookForm() {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    description: ''
  });

  const handleChange = (e) => {s
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
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        type="text"
        required
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author"
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category (Optional)"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description (Optional)"
      />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default BookForm;

import React, { useState } from 'react';



