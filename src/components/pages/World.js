import React, { useEffect } from 'react';

function World() {
    useEffect(() => {
        document.title = "World - Newsly"
    }, []);
    
    return (
        <div className="world container">
            <h1>Global News are displayed here...</h1>
        </div>
    )
}

export default World;
