import React, { useEffect } from 'react';

function Following() {
    useEffect(() => {
        document.title = "Following - Newsly"
    }, []);

    return (
        <div className="following">
            <h1>Following is displayed here...</h1>
        </div>
    )
}

export default Following;
