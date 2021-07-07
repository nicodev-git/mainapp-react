import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <footer>
                <div className="social">
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-instagram"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                </div>
                <ul className="list-inline">
                    <li className="list-inline-item"><a href="/">Newsly</a></li>
                    <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
                    <li className="list-inline-item"><a href="/about">About</a></li>
                    <li className="list-inline-item"><a href="#">Terms & Conditions</a></li>
                    <li className="list-inline-item"><a href="/settings">Settings</a></li>
                </ul>
                <p className="copyright">Copyright &copy; Newsly 2021 | All Rights Reserved</p>
            </footer>
        </div>
    );
};

export default Footer;
