import React, {useEffect} from 'react';
import News from '../News/News';
// import {NewsContextProvider} from '../News/NewsContext';

const Home = () => {
    useEffect(() => {
        document.title = "Newsly"
    }, []);
    return (
        <div className="home">
            <News/>
        </div>
    )
    }

export default Home;
