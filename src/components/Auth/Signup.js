import React from 'react';
import {Switch, Link} from 'react-router-dom';
import axios from 'axios';
import './Signup.css';

const Signup = () => {
    return (
        <div className="signup">
            <div className="container">
                <div className="signup-box">
                    <form onSubmit = {(e) => signup(e)}>
                        <div className="small-box">
                            <div className="login-head">
                                <h1 className="signup-heading">Sign Up!</h1>
                            </div>
                            <div className="box">
                                <input
                                    className="enter-name"
                                    type="text"
                                    id="inputUsername"
                                    placeholder="Username"
                                    name="name"
                                    required
                                />
                                <input
                                    className="enter-email"
                                    type="text"
                                    id="inputEmail"
                                    name="email"
                                    required
                                />
                                <input
                                    className="enter-pass"
                                    type="text"
                                    id="inputPassword"
                                    placeholder="Password"
                                    name="psd"
                                    required
                                />
                                <input
                                    class="remember-pass"
                                    type="password"
                                    id="confirmInputPassword"
                                    placeholder="Confirm Password"
                                    name="repeat-pass"
                                    required
                                />
                            </div>
                            <div className="remember">
                                {/* <label>
                                    <input
                                        className="remember"
                                        type="checkbox"
                                        checked="checked"
                                        name="remember"
                                    />
                                    Remember Me
                                </label> */}
                            </div>
                            <div className="privacy-term">
                                <p>
                                    By creating an account, you therefore agree with our 
                                    <a href="#">Terms and Conditions</a>.
                                </p>
                            </div>
                            <div className="clearfix">
                                {/* <button type="button" className="cancelButton">Cancel</button>
                                <button type="submit" className="signUpButton">Sign Up</button> */}
                                <input className="signUpButton" type="submit"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

function signup(e) {
    debugger;
    e.preventDefault();
    let request = {
        username : document.getElementById("inputUsername").value,
        email : document.getElementById("inputEmail").value,
        password : document.getElementById("inputPassword").value,
        confirmPassword : document.getElementById("confirmInputPassword").value
    };
    axios.post("http://localhost:5000/user", request).then((response) => {
        alert(response.data.message);
    }).catch((err) => {
        console.log(err);
    });
};

export default Signup;
