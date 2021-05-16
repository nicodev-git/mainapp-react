import React, { Component } from 'react';
// import { MenuItems } from "./MenuItems";
// import { Button } from "../Button";
// import './Navbar.css';

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
                <div>
                    <a className="navbar-logo" href="/home">
                        <h1>Newsly</h1>
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div action="/action_page.php">
                    <form className="form-inline my-2 my-lg-2">
                        <input
                            className="form-control mr-sm-2" 
                            type="search" 
                            placeholder="Search..."
                            aria-label="Search"
                        />
                        <button
                            className="btn--outline-success"
                            type="submit"><i class="fa fa-search"></i></button>
                    </form>
                </div>
                <div>
                    <a href="/login">
                        <button type="button" className="btn btn-primary">Log In</button>
                    </a>
                </div>
                <div>
                    <a href="/signup">
                        <button type="button" className="btn btn-light">Sign Up</button>
                    </a>
                </div>
                <div className="container">
                    <ul>
                        <div className="dropdown">
                            <a href="">
                                <button className="dropbtn">
                                    News
                                    <i className="fa fa-caret-down"></i>
                                    <span>&#9660;</span>
                                </button>
                            </a>
                            <div className="dropdown-content">
                                <a href="/business">Business</a>
                                <a href="/technology">Technology</a>
                                <a href="/sports">Sports</a>
                                <a href="/science">Science</a>
                                <a href="/health">Health</a>
                            </div>
                        </div>
                        <div className="dropdown">
                            <a href="">
                                <button className="dropbtn">
                                    User
                                    <i className="fa fa-caret-down"></i>
                                    <span>&#9660;</span>
                                </button>
                            </a>
                            <div className="dropdown-content">
                                <a href="/foryou">For You</a>
                                <a href="/localnews">Local News</a>
                            </div>
                        </div>
                        <div className="dropdown">
                            <a href="/topheadlines">
                                <button className="dropbtn">
                                    Top Headlines
                                    <span>&#9660;</span>
                                </button>
                            </a>
                        </div>
                        <div className="dropdown">
                            <a href="/pakistan">
                                <button className="dropbtn">
                                    Pakistan
                                    <span>&#9660;</span>
                                </button>
                            </a>
                        </div>
                        <div className="dropdown">
                            <a href="/world">
                                <button className="dropbtn">
                                    World
                                    <span>&#9660;</span>
                                </button>
                            </a>
                        </div>
                    </ul>
                </div>
            </nav>
        );
    };
};

export default Navbar;