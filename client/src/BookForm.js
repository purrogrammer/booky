import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Alert, Row, Col } from 'react-bootstrap';
import './BookForm.css';

function BookForm() {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    description: '',
    submittedBy: ''
  });
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/books', formData);
      console.log(response.data);
      setMessage({ type: 'success', text: 'Book added successfully!' });
      setFormData({
        title: '',
        author: '',
        category: '',
        description: '',
        submittedBy: ''
      });
    } catch (error) {
      console.error("Error adding book:", error.response);
      setMessage({ type: 'danger', text: 'Error adding book.' });
    }
  };

  return (
    <div>
  
    <Container>
      <Row>
        <Col md={12}>
          <h1>Suggest a Book!</h1>
      <Form onSubmit={handleSubmit} className='book-form' classID='book-submit'
    >
        <Form.Group controlId="formTitle">
          <Form.Label className="form-title">Title</Form.Label>
          <Form.Control
            type="text"
            required
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
          />
        </Form.Group>

        <Form.Group controlId="formAuthor" className="form-group">
          <Form.Label className="form-title">Author</Form.Label>
          <Form.Control
            type="text"
            required
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Author"
          />
        </Form.Group>

        <Form.Group controlId="formCategory" className="form-group">
          <Form.Label className="form-title">Category (Optional)</Form.Label>
          <Form.Control
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
          />
        </Form.Group>

        <Form.Group controlId="formDescription" className="form-group">
          <Form.Label className="form-title">Description (Optional)</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
          />
        </Form.Group>

        <Form.Group controlId="formSubmittedBy" className="form-group">
          <Form.Label className="form-title">Submitted By</Form.Label>
          <Form.Control
            type="text"
            required
            name="submittedBy"
            value={formData.submittedBy}
            onChange={handleChange}
            placeholder="Your Name"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Book
        </Button>
        {message && <Alert variant={message.type} className="mt-3">{message.text}</Alert>}
        </Form>
          </Col>
        </Row>
      </Container>
    
    </div>
  );
}

export default BookForm;


