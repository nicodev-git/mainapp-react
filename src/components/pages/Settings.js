import React from 'react';
import { Redirect } from 'react-router-dom';

const Settings = ({authorized}) => {
    if (!authorized) {
        return (
            <Redirect to='/login'/>
        )
    }
    else {
        return (
            <div>
                <h1>This is the settings page.</h1>
            </div>
        );
    }
};

export default Settings;
