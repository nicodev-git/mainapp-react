// Importing react essentials and CSS files
import React, { Component } from 'react';
// import { MenuItems } from "./MenuItems";
// import { Button } from "../Button";
import './Navbar.css';

class Navbar extends Component {
    // state = { clicked: false }

    // handleClick = () => {
    //     this.setState({ clicked: !this.state.clicked })
    // }

    render() {
        return(
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
                        <form className="input-group my-2 my-lg-2">
                            <input
                                className="form-control inp-search bg-primary text-light" 
                                type="search" 
                                placeholder="Search..."
                                aria-label="Search"
                            />
                            <button
                                className="btn btn-search bg-primary text-light p-1"
                                type="submit"><i class="fa fa-search"></i></button>
                        </form>
                    </div>
                    <div className="col-5 col-md-4">
                        <a className="float-right" href="/login">
                            <button type="button" className="btn btn-nav-login text-light p-1 ml-1">Log In</button>
                        </a>
                        <a className="float-right" href="/signup">
                            <button type="button" className="btn btn-nav-signup text-light p-1">Sign Up</button>
                        </a>
                    </div>
                </div>
                <div>
                    <ul className="nav nav-pills justify-content-center">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="" role="button" aria-haspopup="true" aria-expanded="false">News</a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="/business">Business</a>
                                <a className="dropdown-item" href="/technology">Technology</a>
                                <a className="dropdown-item" href="/sports">Sports</a>
                                <a className="dropdown-item" href="/science">Science</a>
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
                            <a className="nav-link" href="/topstories">Top Headlines</a>
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
};

export default Navbar;