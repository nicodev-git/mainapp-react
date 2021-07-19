import React, { useEffect } from 'react';

function SavedSearch() {
    useEffect(() => {
        document.title = "Saved Searches - Newsly"
    }, []);
    
    return (
        <div className="savedsearches">
            <h1>Saved Searches are displayed here...</h1>
        </div>
    )
}

export default SavedSearch;
