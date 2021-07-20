import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsArticle from '../News/NewsArticle';
import './SearchBar.css';

function Search(props){
    const [data, setData]=useState();
    const [query, setQuery]=useState('');
    const [category, setCategory]=useState('');

    // NOTE: COMMENTED CODE WILL ENABLE TO PASS SEARCH PARAMETERS IN URL AND WILL DISPLAY RESULT ACCORDING TO THAT
    // const queryParams=new URLSearchParams(window.location.search);
    // setQuery(queryParams.get("query"));
    // useEffect((e)=>{
    //     (
    //         async()=>{
    //             e.preventDefault();
    //             axios.get(
    //                 "http://localhost:5000/news/search", {headers:{"Query":query}})
    //                 .then(response=>setData(response.data["news"]))
    //                 .catch((error)=>console.log(error));
    //         }
    //     )();
    // });
    document.title = "Search - Newsly"
    const submit=async(e)=>{
        e.preventDefault();
        axios.get(
            "http://localhost:5000/news/search", {headers:{"Query":query}})
            .then(response=>setData(response.data["news"]))
            .catch((error)=>console.log(error));
        
    }

    return(
        <div className="search">
            <div className=" search-input">
                <form className="input-group my-2 my-lg-2" onSubmit={submit}>
                    <input
                        className="form-control inp-search" 
                        type="search" 
                        id="txtSearch"
                        placeholder="Search..."
                        onChange={e => setQuery(e.target.value)}
                        aria-label="Search"
                    />
                    <label className="form-label" for="txtSearch"></label>
                    <button
                        className="btn btn-search p-1"
                        type="submit"
                    >
                        <i class="fa fa-search"></i>
                    </button>
                </form>
            </div>
            <div className="container">
                {data ? data.map((data) => (<NewsArticle news={data} key={data.url}/>)) : ""}
            </div>

        </div>
    )
}

export default Search;