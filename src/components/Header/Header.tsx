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

    return (<div className='App-header'>
        <div className='left-content'>
            <h2 id='site-title' onClick={navigateToHome}>skipper.ws</h2>
            <button id='aboutButton' onClick={navigateToAbout}>whoami</button>
        </div>
        <div className='right-content'>
            <p id='dntknow'>don't know css</p>
            <p id='dntknow'>pls forgive</p>
        </div>
    </div>
    );
}

export default Header;
