import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';

function CustomNavbar() {
    return (
        <Navbar>
            <Nav>
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/login"></Nav.Link>
                <Nav.Link as={Link} to="/book-list">Club booklist</Nav.Link>
                <Nav.Link as={Link} to="/add-book">Add a book</Nav.Link>
                    <Button>Login</Button>
                </Nav>
        </Navbar>
    );
}

export default CustomNavbar;


