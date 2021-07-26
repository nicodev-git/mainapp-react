import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { useCookies } from 'react-cookie';
import axios from 'axios';

const Settings2=()=>{
    const [cookies, setCookie]=useCookies(['GoogleAuth', 'x-access-token']);
    const [data, setData]=useState({"interests":""});
    const [interests, setInterests]=useState();
    //{
    //     "business":false,
    //     "entertainment":false,
    //     "health":false,
    //     "local":false,
    //     "politics":false,
    //     "sci/tech":false,
    //     "sports":false
    // }});

    const checkChanged=(e)=>{
        console.log("interests: ", interests);
        console.log("data['interests']", data["interests"]);
        console.log("checkChanged");
        document.getElementById("switchBusiness").checked=false; // Not Working
        if(interests.includes("business")){
            interests.splice(0, 1);
            document.getElementById("switchBusiness").checked=false; // Not Working
        }

        
    }
    useEffect(()=>{
    if(cookies["GoogleAuth"]!==undefined || cookies["x-access-token"]!==undefined){
        axios.get('http://localhost:5000/account', {headers:{'x-access-token':cookies['x-access-token']}}).then((response)=>{
            setData(response["data"]["user_info"]);
            setInterests(data["interests"]);
            console.log(data);
        }).catch((err)=>{
            console.log(err);
        })
        // console.log(data);
        // console.log(data["interests"].includes("business"));
        // document.getElementById("switchBusiness").checked=data["interests"].includes("business");
    } else {
        console.log("Not logged in");
    }
    }, [data["name"]])

    // User authenticated?
    if(cookies["GoogleAuth"]===undefined && cookies["x-access-token"]===undefined)
        return(<Redirect to="/"/>)
    else {
        // axios.get('http://localhost:5000/account', {headers:{'x-access-token':cookies['x-access-token']}}).then((response)=>{
        //     // let d=response["data"]["user_info"];
        //     // setData(d);
        //     // console.log("Hello");
        //     // console.log(d);
        //     // console.log(data)
        // }).catch((err)=>{
        //     console.log(err);
        // })
        const submitAccount=(e)=>{
            e.preventDefault();
            console.log("Submitted");
        }
        const submitInterests=(e)=>{
            e.preventDefault();
            console.log("Submitted");
        }
        return(
            <div className="container my-5">
                <h1 className="pb-2">Settings</h1>
                <div className="account pb-2">
                    <h3 className="font-weight-bold">Account</h3>
                    {/* CSS properties are in Footer.css */}
                    <div className="card p-4">
                        <form onSubmit={submitAccount}>
                            <input type="email" placeholder={data["username"]+"@gmail.com"}/>
                            <input type="text" placeholder={data["username"]}/>
                            <input type="password" placeholder="Password"/>
                            <input type="submit" className="btn btn-primary bg-primary" value="Save" />
                        </form>
                        <div className="border-danger px-3 pt-2">
                            <h5 className="font-weight-bold">Delete Account<input className="btn btn-outline-danger del-account float-right" type="button" value="Delete Account"/></h5>
                            <p>Deleting your account will be irreversible.</p>
                        </div>
                    </div>
                </div>
                <div className="interests pb-2">
                    <h3 className="font-weight-bold mt-3">Interests</h3>
                    <div className="card p-4">
                        <form onSubmit={submitInterests}>
                            <div class="custom-control-group custom-switch">
                                <div className="custom-control">
                                    <input type="checkbox" class="custom-control-input" id="switchBusiness" checked={data["interests"].includes("business")} value="business" onChange={checkChanged}/>
                                    <label class="custom-control-label" for="switchBusiness">Business</label>
                                </div>
                                <div className="custom-control">
                                    <input type="checkbox" class="custom-control-input" id="switchEntertainment" checked={data["interests"].includes("entertainment")}/>
                                    <label class="custom-control-label" for="switchEntertainment">Entertainment</label>
                                </div>
                                <div className="custom-control">
                                    <input type="checkbox" checked class="custom-control-input" id="switchHealth" checked={data["interests"].includes("health")}/>
                                    <label class="custom-control-label" for="switchHealth">Health</label>
                                </div>
                                <div className="custom-control">
                                    <input type="checkbox" class="custom-control-input" id="switchLocal" checked={data["interests"].includes("local")}/>
                                    <label class="custom-control-label" for="switchLocal">Local</label>
                                </div>
                                <div className="custom-control">
                                    <input type="checkbox" class="custom-control-input" id="switchPolitical" checked={data["interests"].includes("politics")}/>
                                    <label class="custom-control-label" for="switchPolitical">Politics</label>
                                </div>
                                <div className="custom-control">
                                    <input type="checkbox" class="custom-control-input" id="switchSciTech" checked={data["interests"].includes("sci/tech")}/>
                                    <label class="custom-control-label" for="switchSciTech">Sci/Tech</label>
                                </div>
                                <div className="custom-control">
                                    <input type="checkbox" class="custom-control-input" id="switchSports" checked={data["interests"].includes("sports")}/>
                                    <label class="custom-control-label" for="switchSports">Sports</label>
                                </div>
                            </div>
                            <input type="submit" className="btn btn-primary bg-primary" value="Save" />
                        </form>
                    </div>
                </div>
                <div className="support pb-2">
                    <h3 className="mt-3 font-weight-bold">Support</h3>
                    <div className="card p-3 mb-2">
                        <h5 className="font-weight-bold">Help</h5>
                        <p>Having troubles?</p>
                    </div>
                    <div className="card p-3">
                        <h5 className="font-weight-bold">FA Q</h5>
                        <p>View our frequently asked questions</p>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
};

export default Settings2;