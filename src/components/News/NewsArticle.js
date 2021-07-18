import React from 'react';
import './NewsArticle.css';

function NewsArticle({ news }) {
    var published_date=new Date(Date.parse(news.published_date))
    return (
        <a href={news.url} target="empty">
            <div className="card p-2 mb-4 news">
                <div className="top-line">
                    <p className="mb-0">
                        <span className="source">{news.source}</span>
                        <span className="news-category"> | {news.category}</span>
                        <span className="published-date float-right">{published_date.toLocaleString('en-US', {weekday: "short", year: "numeric", month:"short", day:"2-digit", hour12:true, hour:"2-digit", minute:"2-digit" })}</span>
                    </p>
                    <hr className="news-body-divider"/>
                </div>
                <div className="news-body">
                    <div className="img-article col-4 col-md-2 mr-0">
                        <img className="img-fluid" src={news.top_image} alt=""></img>
                    </div>
                    <div className="news-text">
                        <h3 className="news-title">{news.title}</h3>
                        <p className="news-description">{news.summary}</p>
                    </div>
                </div>
            </div>
        </a>
    //     <p>
    //     <span className="news-source float-left">{news.source}</span>
    //     {/* <span className="news-author float-right">{news.author}</span> */}
    //     <span className="news-published float-right">{news.published_date}</span>
    // </p>
    // <div className="img-article col-4 col-md-2 mr-0">
    //     <img className="img-fluid" src={news.top_image} alt=""></img>
    // </div>
    // <div className="news col-8 col-md-10">
    //     <h1 className="news-title">{news.title}</h1>
    //     <p className="news-desc">{news.summary}</p>
    // </div>
    );
};

export default NewsArticle;
