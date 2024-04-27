import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import CustomNavbar from './CustomNavbar';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { setIsLoggedIn } = useContext(AuthContext); // get setIsLoggedIn from the AuthContext
    const handleLogin = async () => {
        // Perform login logic here
        // You can make an API call to validate the username and password
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
    
        if (response.ok) {
            // If login is successful, set isLoggedIn to true and redirect to the protected page
            setIsLoggedIn(true); // set isLoggedIn to true
            history.push('/protected');
        } else {
            // If login is not successful, handle the error
            const message = await response.text();
            console.error('Login failed:', message);
        }
    };
    const handleCreateAccount = () => {
        // Redirect to the create account page
        navigate('/create-account');
    };

    return (
        <div>
            <Navbar />
            <h1>Login</h1>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
            <p>
                Don't have an account?{' '}
                <a href="/create-account" onClick={handleCreateAccount}>
                    Create an account
                </a>
            </p>
        </div>
    );
};

export default Login;
