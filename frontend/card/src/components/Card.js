// src/components/Card.js
import React from 'react';
import './Card.css'; // Import the CSS file for styling

const Card = ({ heading, subText }) => {
    return (
        <div className="card">
            <h2 className="card-heading">{heading}</h2>
            <hr className="card-divider" />
            <p className="card-subtext">{subText}</p>
        </div>
    );
};

export default Card;
