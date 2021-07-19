import React, { useEffect } from 'react';

function LocalNews() {
    useEffect(() => {
        document.title = "Local News - Newsly"
    }, []);

    return (
        <div className="localnews container">
            <h1>Local News are displayed here...</h1>
        </div>
    )
}

export default LocalNews;
