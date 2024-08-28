// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-columns">
                <div className="footer-column">
                    <h3>Abstract</h3>
                    <ul>
                        <li>Branches</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Resources</h3>
                    <ul>
                        <li>Blog</li>
                        <li>Help Center</li>
                        <li>Release Notes</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Community</h3>
                    <ul>
                        <li>Twitter</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Company</h3>
                    <ul>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Legal</li>
                    </ul>
                </div>
                <div className="footer-column logo-column">
                    <h3>Logo Space</h3>
                    <ul>
                        <li>Copyright</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
