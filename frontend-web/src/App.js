import React, { useEffect, useState } from 'react';
import './App.css';

import Logo from './assets/logo.png';

import Routes from './routes'
import Toolbar from './components/Toolbar/Toolbar'

function App() {
  const [userId, setUserId] = useState(localStorage.getItem('userId'));
  const [userIsLogged, setUserIsLogged] = useState(false);

  useEffect(() => {
    if(userId){
      setUserIsLogged(true)
    }
  }, [])

  return (
    <div className="container">
      <a href="/"><img src={Logo} alt="AirCnC" href="/"/></a>
      
      <label>{userIsLogged.toString()}</label>

      <div className="toolbar">
        <Toolbar/>
      </div>
      <div className="content">
        <Routes/>  
      </div>
    </div>
  );
}

export default App;
