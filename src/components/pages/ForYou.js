import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';


function ForYou({authorized}) {
    useEffect(() => {
        document.title = "For You - Newsly"
    }, []);

    if (!authorized) {
        return (
            <Redirect to='/login'/>
        )
    }
    else {
        return (
            <div className="foryou container">
                <h1>Personal Feeds are being displayed here...</h1>
            </div>
        )
    }
}

export default ForYou;