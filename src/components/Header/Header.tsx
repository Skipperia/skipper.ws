import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './Header.css';

const Header: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const redirectPath = sessionStorage.redirect;
        delete sessionStorage.redirect;
        if (redirectPath) {
            navigate(redirectPath);
        }
    }, [navigate]);

    const navigateToAbout = () => {
        navigate('/about');
    };

    const navigateToHome = () => {
        navigate('/');
    }

    const openGitHub = () => {
        window.open('https://github.com/Skipperia', '_blank');
    };

    return (<div className='App-header'>
        <div className='left-content'>
            <h2 id='site-title' onClick={navigateToHome}>skipper.ws</h2>
            <div className='options-bar'>
                <button id='about-text' onClick={navigateToAbout}>whoami</button>
                <button id='about-text' onClick={openGitHub}> github</button>
            </div>

        </div>
        <div className='right-content'>
            <p id='dntknow'>don't know css</p>
            <p id='dntknow'>pls forgive</p>
        </div>
    </div>
    );
}

export default Header;
