import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios';

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
    const [data, setData] = useState();
    const apiKey = "55ebc220291141b98982efbcffb5aa52";

    useEffect(() => {
        axios.get
        (
            `http://newsapi.org/v2/everything?q=top-headlines&sortBy=publishedAt&apiKey=${apiKey}`
        ).then(response => setData(response.data))
        .catch((error) => console.log(error));
    }, []);

    return(
        <div className="">
            <NewsContext.Provider value={{data}}>
                {props.children}
            </NewsContext.Provider>
        </div>
    );
};

export default NewsContext;