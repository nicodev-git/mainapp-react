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
            <div className="container my-5">
                <h1>
                    <span>
                        <button className="button btn--primary">
                            {" "}
                            <span>&lt;</span>
                            Back {" "}
                        </button> {" "}
                        Settings
                    </span>
                </h1>
            </div>
        );
    }
};

export default Settings;
