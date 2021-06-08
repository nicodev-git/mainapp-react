import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about">
            <div className="about-section">
                <h1>About Us!</h1>
                <p>Just some random text for now...</p>
            </div>
            <h2 style={{textAlign:"center"}}>Our Team</h2>
            <div className="row">
                <div className="column">
                    <div className="card">
                        <img src="" alt="Hussain Shaheen" style={{width:"100%"}}></img>
                        <div className="container">
                            <h2>Hussain Shaheen</h2>
                            <p className="title">Front-End Web Developer</p>
                            <p>Areas of Expertise: ReactJS, and so on...</p>
                            <a href="https://github.com/hussain-shaheen/" className="fa fa-github"></a>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <img src="" alt="Sir Muhammad Imran Saeed" style={{width:"100%"}}></img>
                        <div className="container">
                            <h2>Mr. Muhammad Imran Saeed</h2>
                            <p className="title">Project Supervisor</p>
                            <p>Assistant Professor DCS&SE, IIU</p>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <img src="" alt="Uzair Arif" style={{width:"100%"}}></img>
                        <div className="container">
                            <h2>Uzair Arif</h2>
                            <p className="title">Back-End Developer</p>
                            <p>Areas of Expertise: FLASK, and so on...</p>
                            <a href="https://github.com/mastprotech/" className="fa fa-github"></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <i class="fa fa-copyright" aria-hidden="true"> Newsly 2021</i>
            </div>
        </div>
    )
}

export default About;
