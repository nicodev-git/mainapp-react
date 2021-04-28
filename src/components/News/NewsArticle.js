import React from 'react';
import './NewsArticle.css';

function NewsArticle({ data }) {
    return (
        <a href={data.url}>
            <div className="news container-fluid">
                <h1 className="news-title">{data.title}</h1>
                <img className="img-fluid" src={data.urlToImage} alt="Image"></img>
                <p className="news-desc">{data.description}</p>
                <span className="news-author">{data.author}</span>
                <span className="news-published">{data.publishedAt}</span>
                <span className="news-source">{data.source.name}</span>
            </div>
        </a>
        
    );
};

export default NewsArticle;
