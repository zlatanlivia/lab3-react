import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">RentSpace</Link>
        <div className="navbar-menu">
          <Link to="/" className="navbar-link">Terenuri</Link>
          <Link to="/about" className="navbar-link">Despre noi</Link>
          <Link to="/gallery" className="navbar-link">Galerie</Link>
          <Link to="/events" className="navbar-link">Evenimente</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;