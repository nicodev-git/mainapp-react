import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state={
            query:"",
            redirect:false
        };
    }

    onFormSubmit = (e) => {
        let fullPath="/search/?"+new URLSearchParams({query:this.state.query}).toString();
        this.setState({query:fullPath, redirect:true});
        console.log("Full URL: "+fullPath);
    };

    render() {
        if(this.state.redirect){
            this.setState({redirect:false})
            return(<Redirect to={this.state.query}/>);
        }
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
