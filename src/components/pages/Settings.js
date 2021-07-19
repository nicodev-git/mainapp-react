import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Settings = () => {
    useEffect(() => {
        document.title = "Settings - Newsly"
    }, []);

    const onChange = (e) => {
        e.preventDefault();
        const value= e.target.value;
        console.log("value", value);

        if(value.trim().length===0) {
            setVisibleOptions(options);
            return;
        }

        const returnedItems= [];

        visibleOptions.forEach((option, index) => {
            const foundOptions=option.values.filter(item => {
                return (
                    item.name.toLocaleLowerCase().search(value.trim().toLowerCase())!==-1
                    ||
                    item.description.toLocaleLowerCase().search(value.trim().toLowerCase())!==-1
                );
            });

            returnedItems[index] = {
                header: {
                    name: option.header.name,
                },
                values: foundOptions,
            };

            if(option.header.name.toLocaleLowerCase().search(value.trim().toLowerCase())!==-1) {
                returnedItems[index] = {
                    header: {
                        name: option.header.name,
                    },
                    values: options[index].values,
                };
            }
        });

        setVisibleOptions(returnedItems)
    };


    const options = [
        {
            header: {
                name : "Account",
            },
            values: [
                {
                    name: "Profile",
                    description: 
                        "Your email address is your identity on this app and is used to log in.",
                    tags: [
                        "email",
                        "username",
                        "first name",
                        "last name",
                        "date of birth",
                    ],
                },
                {
                    name:"Password",
                    description: "Change your existing password.",
                    tags: [
                        "existing password",
                        "new password",
                        "confirm new password",
                    ],
                },
                {
                    name: "Delete Account",
                    description: "Deleting your account will be irreversible.",
                    tags: [],
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
                    description: 
                        "Grant Truly Expenses access to external accounts for additional functionality.",
                    tags: [],
                },
            ],
        },

        {
            header: {
                name: "Support",
            },
            values: [
                {
                    name: "Help",
                    description: "Having troubles?",
                    tags: [],
                },
                {
                    name: "FAQ",
                    description: "View our frequently asked questions,",
                    tags: [],
                },
            ],
        },
    ]


    const [visibleOptions, setVisibleOptions] = useState(options);


    return (
        <div className="container my-5">
            <h2>
                <span>
                    <button className="btn btn-primary">
                        {" "}
                        <span>&lt;</span>
                        Back {" "}
                    </button> {" "}
                </span>
                <h1>Settings</h1>
            </h2>
            <input 
                className="form-control mt-5" 
                type="text" 
                placeholder="Search..."
                onChange= {onChange}
            />
            <div>
                {
                    visibleOptions.map(option => <div key={option.header.name} className="mt-5 mt-3">
                        <h3 className="font-weight-bolder">{option.header.name}</h3>
                        <div>
                            {option.values.map(value => <div key={value.name}>
                                <ul className="list-group">
                                    <li className="list-group-item mb-2">
                                        <h5 className="font-weight-bold">{value.name}</h5>
                                        <p>{value.description}</p>
                                        {/* <p>{value.tags}</p> */}
                                    </li>
                                </ul>
                            </div>)}
                        </div>
                    </div>)
                }
            </div>
            <Footer/>
        </div>
    );
};

export default Settings;
