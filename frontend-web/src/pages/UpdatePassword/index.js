import React, { useState, useEffect } from 'react';
import backendApi from '../../services/backendApi';

export default function UpdatePassword( {history} ) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [token, setToken] = useState('');
    
    async function handleSubmit(event){
        event.preventDefault();

        const response = await backendApi.post('/users/reset_password', { email, password, token });

        console.log(response.data);

        alert(response.data)

        history.push({
            pathname: '/'
        });
    }

    return (
        <>
            <p>
                Enter your email, New Password and the token received by email.
                Your token is only valid for 1 hour.
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

                <label htmlFor="password">New Password *</label>
                <input 
                    type="password" 
                    id="password" 
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                />

                <label htmlFor="passwordConfirmation">Confirm New Password *</label>
                <input 
                    type="password" 
                    id="passwordConfirmation" 
                    value={passwordConfirmation}
                    onChange={event => setPasswordConfirmation(event.target.value)}
                />  

                <label htmlFor="token">Token *</label>
                <input 
                    id="token" 
                    placeholder="Token"
                    value={token}
                    onChange={event => setToken(event.target.value)}
                />
                
                <button className="btn" type="submit">Update Password</button>

            </form>

        </>
    )
}