import React from 'react';

import './style.css';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div></div>
      <div className="toolbar_navigation-items">
        <ul>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/user/profile">Profile</a></li>
          <li><a href="/logout">Log out</a></li>
        </ul>
      </div>
    </nav>
  </header>
)

export default toolbar;