import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios';

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
    const [data, setData] = useState();
    const apiKey = "55ebc220291141b98982efbcffb5aa52";
    var query = "top-headlines";
    var param=JSON.stringify({"category":"local"});
    useEffect(() => {
        axios.get
        (
            "http://127.0.0.1:5000/news"
        ).then(response => setData(response.data["news"]))
        .catch((error) => console.log(error));
    });
    console.log(query)

    return(
        <div className="">
            <NewsContext.Provider value={{data}}>
                {props.children}
            </NewsContext.Provider>
        </div>
    );
};

export default NewsContext;