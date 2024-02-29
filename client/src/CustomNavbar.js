import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';

function CustomNavbar() {
    return (
        <Navbar>
            <Nav>
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/login">
                    <Button>Login</Button>
                </Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default CustomNavbar;


