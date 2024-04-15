import React, { useEffect, useState } from "react";
import './Footer.css'

const Footer = () => {
    const [currYear, setCurrYear] = useState(0);
    useEffect(() => {
        const currentDate = new Date();
        setCurrYear(currentDate.getFullYear());
    })
    const openGitHub = () => {
        window.open('https://github.com/Skipperia', '_blank');
    };

    const openLinkedin = () => {
        window.open('https://linkedin.com/in/alex-kipper', '_blank');
    };

    return (
        <div className="footer-col-wrapper">
            <div className="footer-col footer-col-1">

            </div>
            <div className="footer-col footer-col-2">
                <p>© 2023-{currYear} Skipper.ws All rights reserved.
                    <br></br>
                    <a className="no-style-link" onClick={openLinkedin}>linkedin</a> -
                    <a className="no-style-link" onClick={openGitHub}> github</a>
                </p>
            </div>

            <div className="footer-col footer-col-3">

            </div>
        </div>
    )
}

export default Footer;