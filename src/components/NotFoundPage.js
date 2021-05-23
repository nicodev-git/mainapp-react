import React from 'react';
import {Link} from 'react-router-dom';
import NotFound from '../assests/images/CSS-Tricks.png'

const NotFoundPage = () => {
    return (
        <div>
            <h1 style={{textAlign:"center"}}>
                <img className="img-fluid" src={NotFound}/>
                <Link to='/'>Let's Go Home</Link>
            </h1>
        </div>
    );
};

export default NotFoundPage;
