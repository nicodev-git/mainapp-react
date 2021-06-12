import React from 'react';
import Hussain from '../../assests/images/Hussain - Profile Picture.png';
import Imran from '../../assests/images/Sir Imran Saeed - Profile Picture.jpeg';
import Uzair from '../../assests/images/Uzair - Profile Picture.jpg'
import './About.css';

const About = () => {
    return (
        <div className="about">
            <div className="about-section">
                <h1>About Us!</h1>
                <p>Newsly is an open-source News Aggregator. It's an alternative to Google News, Feedly etc.</p>
            </div>
            <h2 style={{textAlign:"center"}}>Our Team</h2>
            <div className="container-fluid p-5">
                <div className="row">
                    <div className="col-12 col-md-4 pt-4">
                        <div className="card">
                            <img src={Hussain} alt="Hussain Shaheen"className="img-thumbnail"></img>
                            <div className="p-2">
                                <h2>Hussain Shaheen</h2>
                                <p className="title">Front-End Web Developer</p>
                                <p>Areas of Expertise: ReactJS, and so on...</p>
                                <a href="https://github.com/hussain-shaheen/"><i class="fa fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 ">
                        <div className="card">
                            <img src={Imran} alt="Sir Muhammad Imran Saeed"  className="img-thumbnail"></img>
                            <div className="p-2">
                                <h2>Mr. Muhammad Imran Saeed</h2>
                                <p className="title">Project Supervisor</p>
                                <p>Assistant Professor DCS&SE, IIU</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4  pt-4">
                        <div className="card">
                            <img src={Uzair} alt="Uzair Arif" className="img-thumbnail"></img>
                            <div className="p-2">
                                <h2>Uzair Arif</h2>
                                <p className="title">Back-End Developer</p>
                                <p>Areas of Expertise: FLASK, and so on...</p>
                                <a href="https://github.com/mastprotech/" className="fa fa-github"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
            &copy;Newsly 2021
            </div>
        </div>
    )
}

export default About;
