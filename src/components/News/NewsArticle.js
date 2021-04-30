import React from 'react';
import './NewsArticle.css';

function NewsArticle({ data }) {
    return (
        <a href={data.url}>
            <div className="card p-2 mb-4">
                <div className="">
                    <div className="img-article col-4 col-md-2 mr-0">
                        <img className="img-fluid" src={data.urlToImage} alt=""></img>
                    </div>
                    <div className="news col-8 col-md-10">
                        <h1 className="news-title">{data.title}</h1>
                        <p className="news-desc">{data.description}</p>
                        <p>
                            <span className="news-author">{data.author}</span>
                            <span className="news-published">{data.publishedAt}</span>
                            <span className="news-source">{data.source.name}</span>
                        </p>
                    </div>
                </div>
            </div>
        </a>
        
    );
};

export default NewsArticle;
