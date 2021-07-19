import React, { useEffect } from 'react';

function TopStories() {
    useEffect(() => {
        document.title = "Top Stories - Newsly"
    }, []);

    return (
        <div className="topstories container">
            <h1>Top Stories are displayed here...</h1>
        </div>
    )
}

export default TopStories;
