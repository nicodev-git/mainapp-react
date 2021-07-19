// Importing react essentials and CSS files
import React from 'react';
import {useCookies} from 'react-cookie';
import { Redirect } from 'react-router-dom';

// Importing axios
import axios from 'axios';

// Importing Navbar CSS File
import './Navbar.css';

import SearchBar from '../Search Bar/SearchBar';

import News from '../News/News';


const Navbar = () => {
    // state = {news: []};
    // onSearchSubmit = async (query) => {
    //     const response = await axios.get('http://localhost:5000/news/search')
    // };
    const [cookies, setCookie, removeCookie]=useCookies(['GoogleAuth', 'x-access-token']);
    
    const logout = async () => {
        removeCookie("x-access-token");
        removeCookie("GoogleAuth");
    }

    let menu;
    if(cookies["GoogleAuth"]===undefined && cookies["x-access-token"]===undefined) {
        menu = (
            <div className="col-5 col-md-4">
                <a className="float-right" href="/login">
                    <button type="button" className="btn btn-nav-login text-light p-1 ml-1">Log In</button>
                </a>
                <a className="float-right" href="/signup">
                    <button type="button" className="btn btn-nav-signup text-light p-1">Sign Up</button>
                </a>
            </div>
        )
    } else {
        menu = (
            <div className="col-5 col-md-4">
                <a className="float-right" href="/settings">
                    <button type="button" className="btn btn-nav-login text-light p-1 ml-1">Account</button>
                </a>
                <a className="float-right" href="#">
                    <button type="button" className="btn btn-nav-signup text-light p-1" onClick={logout}>Logout</button>
                </a>
            </div>
        )
    }
    return (
        <nav>
            <div className="navbar navbar-expand-lg navbar-light bg-primary">
                <div className="col-4">
                    <a className="navbar-logo text-light" href="/">
                        <h1>Newsly</h1>
                    </a>
                    {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button> */}
                </div>
                <div className="col-3 col-md-4" action="/action_page.php">
                    <SearchBar/>
                    {/* <form className="input-group my-2 my-lg-2">
                        <input
                            className="form-control inp-search bg-primary text-light" 
                            type="search" 
                            placeholder="Search..."
                            aria-label="Search"
                        />
                        <button
                            className="btn btn-search bg-primary text-light p-1"
                            type="submit"
                        >
                            <i class="fa fa-search"></i>
                        </button>
                    </form> */}
                </div>
                {menu}
            </div>
            <div>
                <ul className="nav nav-pills justify-content-center nav-categories">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="" role="button" aria-haspopup="true" aria-expanded="false">News</a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="/business">Business</a>
                            <a className="dropdown-item" href="/sci-tech">Sci/Tech</a>
                            <a className="dropdown-item" href="/entertainment">Entertainment</a>
                            <a className="dropdown-item" href="/sports">Sports</a>
                            <a className="dropdown-item" href="/health">Health</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="" role="button" aria-haspopup="true" aria-expanded="false">User</a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="/foryou">For You</a>
                            <a className="dropdown-item" href="/localnews">Local News</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/topstories">Top Stories</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/pakistan">Pakistan</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/world">World</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/urdu">Urdu News</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/settings">Settings</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;