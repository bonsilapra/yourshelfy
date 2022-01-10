
import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <h1>YourShelfy</h1>
                </div>
            </div>
            <small className='website-rights'>Copyright© {new Date().getFullYear()} - All Rigths reserved</small>
        </div>
    );
}

export default Footer;