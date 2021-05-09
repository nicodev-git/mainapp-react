import React from 'react';
import News from '../News/News';
import {NewsContextProvider} from '../News/NewsContext';

const Home = () => {
    return (
        <div className="home">
            <NewsContextProvider>
                <News/>
            </NewsContextProvider>
        </div>
    )
}

export default Home;
