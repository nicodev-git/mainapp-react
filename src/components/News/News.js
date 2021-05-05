import React, {useContext} from 'react';
import {NewsContext} from './NewsContext';
import NewsArticle from './NewsArticle';

function News(props) {
    const {data} = useContext(NewsContext);
    console.log(data);

    return (
        <div className="container pl-4">
            {data ? data.map((data) => (<NewsArticle news={data} key={data.url}/>)) : "Loading..."}
        </div>
    );
};

export default News;
