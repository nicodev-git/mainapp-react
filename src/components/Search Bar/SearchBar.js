import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state={
            query:""
        };
    }
    

    // onInputChange = event => {
    //     this.setState({query: event.target.value},
    // };

    onFormSubmit = (e) => {
        e.preventDefault();
        let fullPath="/search/?"+new URLSearchParams({query:this.state.query}).toString();
        console.log("Full URL: "+fullPath);
        <Link to={fullPath}/>
    };

    render() {
        return(
            <form className="input-group my-2 my-lg-2" onSubmit = {this.onFormSubmit}>
                <input
                    className="form-control inp-search bg-primary text-light" 
                    type="search" 
                    placeholder="Search..."
                    aria-label="Search"
                    onChange={(e)=>{this.setState({query:e.target.value})}}
                />
                <button
                    className="btn btn-search bg-primary text-light p-1"
                    type="submit"
                >
                    <i class="fa fa-search"></i>
                </button>
            </form>
        );
    }
};

export default SearchBar;
