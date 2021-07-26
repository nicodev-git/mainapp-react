import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Redirect } from 'react-router-dom';

const Logout=()=>{
    const [cookies, setCookies, removeCookies]=useCookies(['GoogleAuth', 'x-access-token']);
    removeCookies("x-access-token");
    removeCookies("GoogleAuth");
    useEffect(()=>{
        window.location.reload();
    })
    return(<Redirect to="/"/>);
}

export default Logout;