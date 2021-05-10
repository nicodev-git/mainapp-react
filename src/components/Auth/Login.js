import React from 'react';
// import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import axios from 'axios';
import Home from '../pages/Home';
import './Login.css';

const Login = () => {
    return (
        <div className="login-box">
            <div className="short-box">
                <form onSubmit = {(e) => login(e)}>
                    <div className="row">
                        <div className="login-head">
                            <div className="login">Log In to Newsly</div>
                        </div>
                    </div>
                    <div className="email">
                        <input
                            className="user-email"
                            type="text"
                            id="inputEmail"
                            name="username"
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div className="password">
                        <input
                            className="user-pass"
                            type="text"
                            name="password"
                            id="inputPassword"
                            placeholder="Password"
                            required
                        />
                    </div>
                    <div className="login">
                        <a href={<Home/>}>
                            <input className="log-in" type="submit"/>
                        </a>
                    </div>
                    {/* <div className="row">
                        <div className="signup">
                            <a href="">Sign Up</a>
                        </div>
                        <div className="forgotPassword">
                            <a href="#">Forgot Password</a>
                        </div>
                    </div> */}
                </form>
            </div>
        </div>
    );
};

function login(e) {
    debugger;
    e.preventDefault();
    let request = {
        email : document.getElementById("inputEmail"),
        password : document.getElementById("inputPassword")
    };

    axios.post("http://localhost:5000/login", request).then(
        response => {
            alert(response.data.message);
        }
    ).catch(err => {
        console.log(err);
    })
};

export default Login;
