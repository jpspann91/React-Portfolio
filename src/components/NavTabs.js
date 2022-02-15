import React from 'react';
import logo from '../Assets/logo.gif';
import './NavTabs.css'
import 'bootstrap/dist/js/bootstrap.bundle';

import {
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
    AiOutlineContacts
} from 'react-icons/ai'

import { TiDocument } from 'react-icons/ti'

function NavTabs({ currentPage, handlePageChange }) {

    return (
        <header className='header sticky-top' style={{ backgroundColor: '#2E294E' }}>
            <nav className='navbar navbar-expand-md navbar-dark' >
                <a href='#home' className='navbar-brand btn'
                    onClick={() => handlePageChange('Home')}>
                    <img src={logo} width='60px' alt='logo' />
                </a>
                <button className='navbar-toggler' type='button'
                data-bs-toggle='collapse' data-bs-target='#navCollapse'
                aria-controls='navCollapse'
                aria-label='Toggle NavBar'>
                    <span style={{color: '#FF5B47'}} className='navbar-toggler-icon' ></span>
                </button>
                <div id='navCollapse' className='collapse navbar-collapse ml-auto' >
                    <ul className="nav nav-tabs ms-auto" id='navTabs'>
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
                </div>
            </nav>
        </header>
    );
}

export default NavTabs;