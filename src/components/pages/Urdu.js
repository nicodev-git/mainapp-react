import React, { useEffect } from 'react';

const Urdu  = () => {
    useEffect(() => {
        document.title = "Urdu News - Newsly"
    }, []);
    
    return (
        <div className="container">
            <h1>Urdu News are being displayed here...</h1>
        </div>
    )
}

export default Urdu;
