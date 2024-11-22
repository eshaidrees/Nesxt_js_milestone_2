import React from "react";
import { FiFacebook, FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import "../../styles/footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
            <div className="footer-icons">
                   <a href="https://www.linkedin.com/in/esha-idrees-1379692b7" target="_blank" rel="noopener noreferrer">
                        <FiLinkedin className="icon" />
                    </a>
                    <a href="https://github.com/eshaidrees" target="_blank" rel="noopener noreferrer">
                        <FiGithub className="icon" />
                    </a>

                    <a target="_blank" rel="noopener noreferrer">
                        <FiInstagram className="icon" />
                    </a>
                    <a target="_blank" rel="noopener noreferrer">
                        <FiFacebook className="icon" />
                    </a>
                </div>
                <div className="footer-links">
                    <a href="home">Home</a>
                    <a href="about">About</a>
                    <a href="contact">Contact</a>
                </div>
                <p>© 2024. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;