import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../../assets/main-title.png'
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


    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Update the body class based on theme state
        if (isDark) {
            document.body.classList.add('light-theme');
        } else {
            document.body.classList.remove('light-theme');
        }
    }, [isDark]);

    const toggleTheme = () => {
        setIsDark(!isDark); // Toggle the state between true and false
    };


    return (
        <div className='toolbar-container' role='banner'>
            <div className='inner-toolbar-container'>
                <div className='inner-left-toolbar-container'>
                    <img onClick={navigateToHome} src={img} alt="Description of image" id="img-title" />
                </div>
                <div className='inner-right-toolbar-container'>
                    <p className="no-style-link" onClick={navigateToAbout}>about</p>
                    <p className="no-style-link" onClick={openGitHub}>github</p>
                    <a className="no-style-link" href='mailto:kippera27@gmail.com'>contact</a>
                    <svg onClick={toggleTheme} className="no-style-link" viewBox="0 0 16 16" version="1.1" width="14" height="16" aria-hidden="true">
                        <path fill-rule="evenodd" d="M8 1.5c-2.363 0-4 1.69-4 3.75c0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848c.284.411.537.896.621 1.49a.75.75 0 0 1-1.484.211c-.04-.282-.163-.547-.37-.847a8.695 8.695 0 0 0-.542-.68c-.084-.1-.173-.205-.268-.32C3.201 7.75 2.5 6.766 2.5 5.25C2.5 2.31 4.863 0 8 0s5.5 2.31 5.5 5.25c0 1.516-.701 2.5-1.328 3.259c-.095.115-.184.22-.268.319c-.207.245-.383.453-.541.681c-.208.3-.33.565-.37.847a.75.75 0 0 1-1.485-.212c.084-.593.337-1.078.621-1.489c.203-.292.45-.584.673-.848c.075-.088.147-.173.213-.253c.561-.679.985-1.32.985-2.304c0-2.06-1.637-3.75-4-3.75zM6 15.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75zM5.75 12a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5z" fill="#626262"></path>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Header;
