import React from 'react';
import News from '../News/News';
import {NewsContextProvider} from '../News/NewsContext'

function ForYou() {
    return (
        <div className="foryou">
            <NewsContextProvider query="local">
                <News/>
            </NewsContextProvider>
        </div>
    )
}

export default ForYou;