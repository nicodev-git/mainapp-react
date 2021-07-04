import React from 'react';
import { Redirect } from 'react-router-dom';

const Settings = () => {
    const options = [
        {
            header: {
                name : "Account",
            },
            values: [
                {
                    name: "Profile",
                    description: "Your email address is your identity on this app and is used to log in.",
                    tags: [
                        "email",
                        "username",
                        "first name",
                        "last name",
                        "date of birth",
                    ],
                },
            ],
        },
        {
            header: {
                name: "Applications",
            },
            values: [
                {
                    name: "Third Party Services",
                    description: "Grant Truly Expenses access to external accounts for additional functionality.",
                    tags: [

                    ],
                },
            ],
        },
        {
            header: {
                
            }
        },
    ]
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
