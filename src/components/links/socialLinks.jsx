/* eslint-disable no-unused-vars */
import React, { Children } from 'react';
import './socialLinks.css'

const Links = () => {
    const socialLinks = [
        'GitHub',
        'Frontend Mentor',
        'Linkedin',
        'Twitter',
        'Instagram'
    ];

    return (
        <div className='social-link-container'>
            {socialLinks.map((link, index) => (
                <div key={index} className="social-link">
                    {link}
                </div>
            ))}
        </div>
    );
};

export default Links;