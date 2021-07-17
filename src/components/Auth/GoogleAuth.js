import React, { useEffect, useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useCookies } from 'react-cookie';

function GoogleAuth() {
    const clientId="700467371021-106qk0mt2c9japgu5cki4hje1h3hpqck.apps.googleusercontent.com";
    const [showLoginButton, setShowLoginButton]=useState(true);
    const [showLogoutButton, setShowLogoutButton]=useState(false);
    const [cookies, setCookie, removeCookie]=useCookies(["GoogleAuth"]);


    useEffect(() => {
        (async() => {
            if(cookies.GoogleAuth==="" || cookies.GoogleAuth===undefined) {
                console.log("Empty cookie");
                setShowLoginButton(true);
                setShowLogoutButton(false);
            } else {
                console.log("Filled cookie");
                console.log(cookies.GoogleAuth);
                setShowLoginButton(false);
                setShowLogoutButton(true);
            }
        })();
    });

    const onLoginSuccess = (res) => {
        console.log("Login Success", res.profileObj);
        setShowLoginButton(false);
        setShowLogoutButton(true);
        setCookie("GoogleAuth", res.profileObj, {path:"/"});
    }

    const onLoginFailure = (res) => {
        console.log("Login Failure", res);
    }

    const onSignoutSuccess = () => {
        alert("You have been signed out successfully");
        setShowLoginButton(true);
        setShowLogoutButton(false);
        removeCookie("GoogleAuth");
    }

    return(
        <div>
            {
                showLoginButton?
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Login with Google"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={"single_host_origin"}
                /> : null
            }
            {
                showLogoutButton?
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Logout"
                    onLogoutSuccess={onSignoutSuccess}
                /> : null
            }
            
        </div>
    );
};

export default GoogleAuth;
