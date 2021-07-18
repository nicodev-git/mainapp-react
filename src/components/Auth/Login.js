/*  Importing React Essentials*/
import React, { useState } from 'react';

/*  Importing useCookies hook*/
import { useCookies } from 'react-cookie';

/*  Importing useHistory hook*/
import { useHistory } from 'react-router-dom';

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

const Login = () => {
    let history = useHistory();

    const [username, setUsername]=useState('');
    const [password, setPassword]=useState('');
    const [cookies, setCookie]= useCookies(["user"]);

    const submit = async(e) => {
        e.preventDefault();
        let request={
            "username":username,
            "password":password
        }
        axios.post('http://localhost:5000/login', request).then((response) => {
            console.log(request);
            console.log(response.data["token"]);
            setCookie('x-access-token', response.data["token"], {path:"/"});
            console.log("From Cookie:");
            console.log({'x-access-token':cookies['x-access-token']});
            
            // alert(response.data.message);
        }).catch((err) => {
            console.log('Error');
        });
    }


    return (
        <div>
            <div className="login-box">
                <div className="short-box">
                    <form onSubmit={submit}>
                        <div className="login-head">
                            <div className="login text-center">Log In to Newsly</div>
                        </div>
                        <div className="email">
                            <input
                                className="username form-control"
                                type="text"
                                id="floatinginput"
                                name="username"
                                placeholder="Username"
                                onChange={e => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="password">
                            <input
                                className="user-pass form-control"
                                type="password"
                                name="password"
                                id="inputPassword"
                                placeholder="Password"
                                onChange={e => setPassword(e.target.value)}
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
};

// function login(e) {
//     debugger;
//     e.preventDefault();
//     let request = {
//         email : document.getElementById("inputEmail"),
//         password : document.getElementById("inputPassword")
//     };

//     axios.post("http://localhost:5000/login", request).then(
//         response => {
//             alert(response.data.message);
//         }
//     ).catch(err => {
//         console.log(err);
//     })
// };

export default Login;
