import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';


function ForYou() {
    useEffect(() => {
        document.title = "For You - Newsly"
    }, []);

    return (
        <div className="foryou container">
            <h1>Personal Feeds are being displayed here...</h1>
        </div>
    )
};

export default ForYou;