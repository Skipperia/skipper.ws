import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Toolbar } from 'primereact/toolbar';
import { Avatar } from 'primereact/avatar';
import myImage from '../../assets/image.png';

import './Header.css';
import { Button } from 'primereact/button';

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

    const startContent = (
        <React.Fragment>
        </React.Fragment >
    );

    const centerContent = (
        <div className="flex flex-wrap align-items-center gap-3">
            {/* <button className="p-link inline-flex justify-content-center align-items-center text-white h-3rem w-3rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200">
                <i className="pi pi-home text-2xl"></i>
            </button>
            <button className="p-link inline-flex justify-content-center align-items-center text-white h-3rem w-3rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200">
                <i className="pi pi-user text-2xl"></i>
            </button>
            <button className="p-link inline-flex justify-content-center align-items-center text-white h-3rem w-3rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200">
                <i className="pi pi-search text-2xl"></i>
            </button> */}
            <Button id="home-button" icon='pi pi-home' outlined text label='Home' />
        </div>
    );

    const endContent = (
        <React.Fragment>
            <div className="flex align-items-center gap-2">
                <Avatar image={myImage} shape="square" />
            </div>
        </React.Fragment>
    );

    return (
        <div className='toolbar-container'>
            <div className='inner-toolbar-container'>
                <Toolbar start={startContent} center={centerContent} end={endContent} className="bg-gray-900 shadow-2" style={{ borderRadius: '3rem', backgroundImage: 'linear-gradient(to right, var(--bluegray-500), var(--bluegray-800))' }} />
            </div>
        </div>
    );
}

export default Header;
