import React from 'react';
import './App.css';

import Logo from './assets/logo.svg';

import Routes from './routes'
import Toolbar from './components/Toolbar/Toolbar'

function App() {
  return (
    <div className="container">
      <a href="/"><img src={Logo} alt="AirCnC" href="/"/></a>

      <div className="toolbar">
        <Toolbar />
      </div>
      <div className="content">
        <Routes/>  
      </div>
    </div>
  );
}

export default App;
