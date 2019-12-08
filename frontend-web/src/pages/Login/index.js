import React, { useState, useEffect } from 'react';
import backendApi from '../../services/backendApi';

export default function Login( {history} ) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(event){
    event.preventDefault();

    const response = await backendApi.post('/users/login', { email, password });

    const { id, accessToken } = response.data;

    localStorage.setItem('userId', id);
    localStorage.setItem('accessToken', accessToken);

    alert(response.data.id)

    history.push({
        pathname: '/dashboard'
    });
    }

    return (
        <>
            <p>
            Welcome to <strong>Board Geek</strong> <br/> Find amazing people to play your favourite Board Games today!
            </p>

            <form onSubmit={handleSubmit}>
            <label htmlFor="email">E-MAIL *</label>
            <input 
                type="email" 
                id="email" 
                placeholder="e-mail"
                value={email}
                onChange={event => setEmail(event.target.value)}
                />
            
            <label htmlFor="email">Password *</label>
            <input 
                type="password" 
                id="password" 
                placeholder="password"
                value={password}
                onChange={event => setPassword(event.target.value)}
                />

            <button className="btn" type="submit">Sign in</button>

            </form>

            <p>Don't have an account yet? No worries</p>
            <button className="btn" onClick={() => history.push('/register')}>Sign Up</button>

            <p><a href="/forgot_password">Forgot your password?</a></p>
        </>
    )
}