import React from 'react';
import logo from '../Assets/logo.gif';
import './NavTabs.css'

import {
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
    AiOutlineContacts
} from 'react-icons/ai'

import {TiDocument} from 'react-icons/ti'

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <header className='header sticky-top' style={{backgroundColor: '#2E294E'}}>
        <nav className='navbar' >
            <a href='#home' className='navbar-brand btn'
                onClick={() => handlePageChange('Home')}>
                    <img src={logo} width='60px' alt='logo' />
            </a>
            <ul className="nav nav-tabs" id='navTabs'>
                <li className="nav-item">
                    <a
                        href="#home"
                        onClick={() => handlePageChange('Home')}
                        className={currentPage === 'Home' ? 'nav-link active bg-dark text-light' : 'nav-link'}
                    >
                        <AiOutlineHome />Home
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#about"
                        onClick={() => handlePageChange('About')}
                        className={currentPage === 'About' ? 'nav-link active bg-dark text-light' : 'nav-link'}
                    >
                        <AiOutlineUser />About
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#projects"
                        onClick={() => handlePageChange('Projects')}
                        className={currentPage === 'Projects' ? 'nav-link active bg-dark text-light' : 'nav-link'}
                    >
                        <AiOutlineFundProjectionScreen />Projects
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#resume"
                        onClick={() => handlePageChange('Resume')}
                        className={currentPage === 'Resume' ? 'nav-link active bg-dark text-light' : 'nav-link'}
                    >
                        <TiDocument />Resume
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#contact"
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'nav-link active bg-dark text-light' : 'nav-link'}
                    >
                        <AiOutlineContacts />Contact
                    </a>
                </li>
            </ul>
        </nav>
        </header>
    );
}

export default NavTabs;