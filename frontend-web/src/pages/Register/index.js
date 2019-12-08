import React, { useState } from 'react';
import backendApi from '../../services/backendApi';

export default function Register( {history} ) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    async function handleSubmit(event){
        event.preventDefault();

        const response = await backendApi.post('/users/register', { email, password, firstName, lastName });

        console.log(response.data)
        
        alert('Thank you for registering, Please verify your email address');

        history.push({
            pathname: '/'
        });
    }

    return (
        <>
            <p>
                Register
            </p>

            <form onSubmit={handleSubmit}>

                <label htmlFor="firstName">First Name *</label>
                <input
                id="firstName"
                placeholder="first name"
                value={firstName}
                onChange={event => setFirstName(event.target.value)}
                />

                <label htmlFor="lastName">Last Name *</label>
                <input
                id="lastName"
                placeholder="lastName"
                value={lastName}
                onChange={event => setLastName(event.target.value)}
                />

                <label htmlFor="email">Email *</label>
                <input
                id="email"
                placeholder="email"
                value={email}
                onChange={event => setEmail(event.target.value)}
                />

                <label htmlFor="password">Password *</label>
                <input
                id="password"
                placeholder="password"
                value={password}
                onChange={event => setPassword(event.target.value)}
                />

                <label htmlFor="passwordConfirmation">Confirm Password *</label>
                <input
                id="passwordConfirmation"
                placeholder="confirm password"
                value={passwordConfirmation}
                onChange={event => setPasswordConfirmation(event.target.value)}
                />

                <button className="btn" type="submit">Entrar</button>

            </form>
        </>
    )
}