import React from 'react';
import './NewsArticle.css';

function NewsArticle({ news }) {
    return (
        <a href={news.url}>
            <div className="card p-2 mb-4">
                <div className="">
                    <div className="img-article col-4 col-md-2 mr-0">
                        <img className="img-fluid" src={news.top_image} alt=""></img>
                    </div>
                    <div className="news col-8 col-md-10">
                        <h1 className="news-title">{news.title}</h1>
                        <p className="news-desc">{news.summary}</p>
                        <p>
                            <span className="news-author">{news.author}</span>
                            <span className="news-published">{news.published_date}</span>
                            <span className="news-source">{news.source}</span>
                        </p>
                    </div>
                </div>
            </div>
        </a>
        
    );
};

export default NewsArticle;
