import React, {useState, useEffect} from 'react';
import axios from 'axios';
import NewsArticle from "./../News/NewsArticle.js";

function Health() {
    const [data, setData]=useState();

    useEffect(()=>{
        axios.get(
            "http://localhost:5000/news", {headers:{"Category":"health"}})
            .then(response=>setData(response.data["news"]))
            .catch((error)=>console.log(error));
        }, []);
    return (
        <div className="health container">
            {data ? data.map((data) => (<NewsArticle news={data} key={data.url}/>)) : "Loading..."}
        </div>
    )
}

export default Health;
