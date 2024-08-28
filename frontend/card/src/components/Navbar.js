// src/components/Navbar.js
import React from 'react';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <div className="logo-space">Logo</div>
                <div className="nav-links">
                    <a href="#abstract">Abstract</a>
                    <a href="#help-center">Help Center</a>
                </div>
            </div>
            <div className="navbar-right">
                <button className="submit-request-button">Submit a Request</button>
            </div>
        </nav>
    );
};

export default Navbar;
