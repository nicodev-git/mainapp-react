import React from 'react';
import { Redirect } from 'react-router-dom';

const Settings = () => {
    return (
        <div className="container my-5">
            <h2>
                <span>
                    <button className="btn btn-primary">
                        {" "}
                        <span>&lt;</span>
                        Back {" "}
                    </button> {" "}
                    Settings
                </span>
            </h2>
            <input className="form-control" type="text" placeholder="Search..."/>
        </div>
    );
};

export default Settings;
