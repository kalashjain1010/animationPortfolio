import React from 'react';
import logo from '../assets/boy.gif';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" className="logo-image" />
        </div>
        <div className="navbar-buttons">
          <button className="navbar-button">About</button>
          <button className="navbar-button">Work</button>
          <button className="navbar-button">Content</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
