// src/components/CardGallery.js
import React from 'react';
import Card from './Card'; // Import the Card component
import './CardGallery.css'; // Import the CSS file for styling

const CardGallery = () => {
    const cardsData = [
        {
            heading: 'Branches',
            subText: 'Abstract Branches lets you manage, version, and document your designs in one place.'
        },
        {
            heading: 'Manage Your Account',
            subText: 'Easily update your personal information and settings.'
        },
        {
            heading: 'Manage Billing',
            subText: 'Access and manage your billing information and history.'
        },
        {
            heading: 'Support',
            subText: 'Get help and support for any issues or questions you may have.'
        },
        {
            heading: 'Documentation',
            subText: 'Find detailed documentation and guides for using our services.'
        },
        {
            heading: 'Contact Us',
            subText: 'Reach out to us for any inquiries or feedback.'
        }
    ];

    return (
        <div className="card-gallery">
            {cardsData.map((card, index) => (
                <Card
                    key={index}
                    heading={card.heading}
                    subText={card.subText}
                />
            ))}
        </div>
    );
};

export default CardGallery;
