import React, { useState, useEffect } from 'react';
import backendApi from '../../services/backendApi';

export default function ForgotPassword( {history} ) {
    const [email, setEmail] = useState('');
    
    async function handleSubmit(event){
    event.preventDefault();

    const response = await backendApi.post('/users/forgot_password', { email });

    console.log(response.data);

    alert(response.data)

    history.push({
        pathname: '/'
    });
    }

    return (
        <>
            <p>
            Please enter your email below. If we find an existing user registered with this email address, 
            you will receive an email to updated your password.
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
            
            <button className="btn" type="submit">Recover Password</button>

            </form>

        </>
    )
}