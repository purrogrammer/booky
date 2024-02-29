import React, { useState } from 'react'; // Add missing import statement for useState
import { useHistory } from 'react-router-dom';
import CustomNavbar from './CustomNavbar';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import CustomNavbar from './CustomNavbar';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const CreateAccount = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({}); // state to hold validation errors
    const history = useHistory();

    const validateForm = () => {
        let newErrors = {};

        // Validate username
        if (!username) newErrors.username = 'Username is required';

        // Validate password
        if (!password) newErrors.password = 'Password is required';
        else if (password.length < 8) newErrors.password = 'Password must be at least 8 characters';

        // Validate email
        if (!email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is not valid';

        setErrors(newErrors);

        // If no errors, return true, else return false
        return Object.keys(newErrors).length === 0;
    };

    const handleCreateAccount = async () => {
        if (!validateForm()) return; // if form is not valid, stop here

        try {
            const response = await fetch('/api/users/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password, email })
            });

            if (response.ok) {
                // Account creation successful, redirect to the login page
                history.push('/login');
            } else {
                // Account creation failed, handle the error
                const errorData = await response.json();
                throw new Error(errorData.message);
            }
        } catch (error) {
            console.error('Error creating account:', error.message);
            // Handle the error here (e.g., display an error message to the user)
        }
        history.push('/login');
    };

   
    return (
        <div>
            <CustomNavbar />
            <h1>Create Account</h1>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && <p>{errors.username}</p>}
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p>{errors.password}</p>}
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p>{errors.email}</p>}
            <button onClick={handleCreateAccount}>Create Account</button>
            const [message, setMessage] = useState('');

            function CreateAccount() {
                const [username, setUsername] = useState('');
                const [password, setPassword] = useState('');
                const [email, setEmail] = useState('');
                const [errors, setErrors] = useState({});
                const [message, setMessage] = useState('');
                const history = useHistory();

                const validateForm = () => {
                    const errors = {};

                    // Validate username
                    if (!username) errors.username = 'Username is required';

                    // Validate password
                    if (!password) errors.password = 'Password is required';
                    else if (password.length < 8) errors.password = 'Password must be at least 8 characters';

                    // Validate email
                    if (!email) errors.email = 'Email is required';
                    else if (!/\S+@\S+\.\S+/.test(email)) errors.email = 'Email is not valid';

                    setErrors(errors);

                    // If no errors, return true, else return false
                    return Object.keys(errors).length === 0;
                };

                const handleCreateAccount = async () => {
                    if (!validateForm()) return; // if form is not valid, stop here

                    try {
                        const response = await fetch('/api/users/create', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ username, password, email })
                        });

                        if (response.ok) {
                            // Account creation successful, set success message
                            setMessage('Account created successfully!');
                            history.push('/login');
                        } else {
                            // Account creation failed, set error message
                            const errorData = await response.json();
                            setMessage(`Account creation failed: ${errorData.message}`);
                        }
                    } catch (error) {
                        console.error('Error creating account:', error.message);
                        setMessage('An error occurred while creating the account.');
                    }
                };

                return (
                    <div>
                        <CustomNavbar />
                        <h1>Create Account</h1>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        {errors.username && <p>{errors.username}</p>}
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && <p>{errors.password}</p>}
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <p>{errors.email}</p>}
                        <button onClick={handleCreateAccount}>Create Account</button>
                        {message && <p>{message}</p>}
                    </div>
                );
            }

            export default CreateAccount;

            return (
                <div>
                    {/* ... */}
                    {message && <p>{message}</p>}
                    {/* ... */}
                </div>
            );
        </div>
    );
};

export default CreateAccount;