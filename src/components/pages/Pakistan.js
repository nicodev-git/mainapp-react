import React, {useState, useEffect} from 'react';
import axios from 'axios';
import NewsArticle from "./../News/NewsArticle.js";

function Pakistan() {
    const [data, setData]=useState();

    useEffect(()=>{
        axios.get(
            "http://localhost:5000/news", {headers:{"Category":"local"}})
            .then(response=>setData(response.data["news"]))
            .catch((error)=>console.log(error));
        }, []);
    return (
        <div className="pakistan">
            {data ? data.map((data) => (<NewsArticle news={data} key={data.url}/>)) : "Loading..."}
        </div>
    )
}

export default Pakistan;
