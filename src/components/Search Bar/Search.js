import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsArticle from '../News/NewsArticle';
import './SearchBar.css';

function Search(props){
    const [data, setData]=useState();
    const [query, setQuery]=useState('');
    const [category, setCategory]=useState('');
    const queryParams=new URLSearchParams(window.location.search);

    useEffect(()=>{
        setQuery(queryParams.get("query"));
        document.title = "Search - Newsly"
        console.log(query);
        axios.get(
            "http://localhost:5000/news/search", {headers:{"Query":query}})
            .then(response=>setData(response.data["news"]))
            .catch((error)=>console.log(error));
    }, [queryParams.get("query"), query]);
    
    if(data===undefined || data.length===0){
        return(
            <div className="search">
                <div className="container">
                    No result found
                </div>
            </div>
        );
    } else {
        return(
            <div className="search">
                <div className="container">
                    {data ? data.map((data) => (<NewsArticle news={data} key={data.url}/>)) : "No helloresult found"}
                </div>

            </div>
        );
    }
}

export default Search;