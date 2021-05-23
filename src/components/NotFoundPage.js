import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div>
            <p>
                <Link to='/'>Let's Go Home</Link>
            </p>
        </div>
    );
};

export default NotFoundPage;
