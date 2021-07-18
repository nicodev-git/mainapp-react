/*  Importing React Essentials*/
import React, {useState} from 'react';

/*  Importing useHistory hook*/
import { useHistory, Redirect} from 'react-router-dom';

/*  Importing Axios*/
import axios from 'axios';

/*  Importing Home from pages*/
import Home from '../pages/Home';

/*  Importing Footer*/
import FooterOne from '../Footer/FooterOne';

/*  Importing Login CSS File*/
import './Login.css';

/*  Importing Google OAuth*/
import GoogleAuth from './GoogleAuth';

import { useCookies } from 'react-cookie';

const Login = () => {
    /*//////////////////////////////
    NOTE: I did NOT implement jwt-login, do it yourself.
    This file contains necessary things to use Redirect. Redirect won't work until you use it correctly.
    1. import {Redirect} from 'react-router-dom';
    2. Use if condition which will decide whether or not user is logged in. like Line#36
    3. Use Redirect so that Redirect will execute instead of return ('normal HTML code') like used in this file.
    4. Any query, ask me.
    ////////////////////////////////*/
    const [cookies, setCookie]=useCookies(['GoogleAuth', 'x-access-token'])

    let history = useHistory();
    if(cookies["GoogleAuth"]===undefined && cookies["x-access-token"]===undefined){
        return (
            <div>
                <div className="login-box">
                    <div className="short-box">
                        <form onSubmit = {(e) => login(e)}>
                            <div className="login-head">
                                <div className="login text-center">Log In to Newsly</div>
                            </div>
                            <div className="email">
                                <input
                                    className="user-email"
                                    type="email"
                                    id="inputEmail"
                                    name="username"
                                    placeholder="Email"
                                    required
                                />
                            </div>
                            <div className="password">
                                <input
                                    className="user-pass"
                                    type="password"
                                    name="password"
                                    id="inputPassword"
                                    placeholder="Password"
                                    required
                                />
                            </div>
                            <div className="div-btn-login">
                                <a href={<Home/>}>
                                    <input 
                                        className="btn btn-login bg-primary text-light" 
                                        type="submit" 
                                        value="Log In"
                                        onClick={() => {history.push("/");}}
                                    />
                                </a>
                            </div>
                            <div className="below-login">
                                <div className="forgotPassword">
                                    <a href="#">Forgot Password?</a>
                                </div>
                                <div className="btn-signup">
                                    <a href="/signup">Sign Up</a>
                                </div>
                            </div>
                        </form>
                        <GoogleAuth/>
                    </div>
                </div>
                <FooterOne/>
            </div>
        );
    } else {
        return (<Redirect to="/"/>);
    }
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
