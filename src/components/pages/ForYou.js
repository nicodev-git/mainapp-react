import React from 'react';
import {Redirect} from 'react-router-dom';


function ForYou({authorized}) {
    if (!authorized) {
        return (
            <Redirect to='/login'/>
        )
    }
    else {
        return (
            <div className="foryou">
                <h1>Personal Feeds are being displayed here...</h1>
            </div>
        )
    }
}

export default ForYou;