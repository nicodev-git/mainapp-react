import React from 'react';
import { Redirect } from 'react-router-dom';
import FooterOne from '../Footer/FooterOne';

const Preferences = () => {
    return (
        <div className="container">
            <h1>Hi! Welcome to Newsly, we're glad you're on board with us!</h1>
            <FooterOne/>
        </div>
    );
};

export default Preferences;
