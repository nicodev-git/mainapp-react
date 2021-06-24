/*  Importing React Essentials*/
import React from 'react';
import {useHistory} from 'react-router-dom';

/*  Importing Axios*/
import axios from 'axios';

/*  Importing Home from pages*/
import Home from '../pages/Home';

/*  Importing Login CSS File*/
import './Login.css';

const Login = () => {
    let history = useHistory();
    return (
        <div className="login-box">
            <div className="short-box">
                <form onSubmit = {(e) => login(e)}>
                    <div className="login-head">
                        <div className="login text-center">Log In to Newsly</div>
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
                            <a href="#">Forgot Password</a>
                        </div>
                        <div className="btn-signup">
                            <a href="/signup">Sign Up</a>
                        </div>
                    </div>
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
