// src/components/Banner.js
import React from 'react';
import './Banner.css'; // Import the CSS file for styling

const Banner = () => {
    return (
        <div className="banner">
            <h1 className="banner-title">How Can We Help?</h1>
            <div className="search-container">
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Search..."
                />
                <button className="search-button">
                    &rarr; {/* Right arrow symbol */}
                </button>
            </div>
        </div>
    );
};

export default Banner;
