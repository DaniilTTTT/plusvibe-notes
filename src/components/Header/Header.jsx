import React from 'react';
import './Header.css';
import logo from '/logo.png';

function Header() {
  return (
    <div className='nav-background'>
      <div className="nav-panel">
        <div className="logo-container" href='#'>
          <img src={logo} alt="logo" className='logo-image' />  
          <h2 className='logo-title'>Plus Vibe Notes</h2>
        </div>
        <nav>
          <a href="#" className='nav-link'>Notes list</a>
          <a href="#" className='nav-link'>Friends</a>
          <a href="#" className='nav-link'>FAQ</a>
          <a href="#" className='nav-link'>About</a>
        </nav>
      </div>
    </div>
  );
};

export default Header;