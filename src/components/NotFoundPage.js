import React from 'react';
import {Link} from 'react-router-dom';
import NotFound from '../assests/images/CSS-Tricks.png'

const NotFoundPage = () => {
    return (
        <div>
            <h1 className="display-4" style={{textAlign:"center"}}>
                <img className="img-fluid" src={NotFound}/>
                <Link to='/'>Go Return Home</Link>
            </h1>
        </div>
    );
};

export default NotFoundPage;
