import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import CustomNavbar from './CustomNavbar';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const { setIsLoggedIn } = useContext(AuthContext); // get setIsLoggedIn from the AuthContext
    const handleLogin = () => {
        // Perform login logic here
        // You can make an API call to validate the username and password

            // If login is successful, set isLoggedIn to true and redirect to the protected page
            setIsLoggedIn(true); // set isLoggedIn to true
            history.push('/protected');
    };

    const handleCreateAccount = () => {
        // Redirect to the create account page
        history.push('/create-account');
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
