import React from 'react';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import Container from 'react-bootstrap/Container';
import logo from '../Assets/logo.gif';
// import Button from 'react/bootstrap/Button';
// import { Link } from 'react-router-dom';

import {
    AiFillContacts,
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
} from 'react-icons/ai'

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <nav className='navbar'>
            <button className='navbar-brand'
                    onClick={()=> handlePageChange('Home')}><img src={logo} width='40'alt='logo'/></button>
        <ul className="nav nav-tabs" id='navTabs'>
            <li className="nav-item">
                <a
                    href="#home"
                    onClick={() => handlePageChange('Home')}
                    //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for

                    className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                >
                    <AiOutlineHome/>Home
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#about"
                    onClick={() => handlePageChange('About')}
                    //  TODO: Add a comment explaining what this logic is doing

                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >
                    <AiOutlineUser/>About
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#projects"
                    onClick={() => handlePageChange('Projects')}
                    //  TODO: Add a comment explaining what this logic is doing

                    className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
                >
                    <AiOutlineFundProjectionScreen/>Projects
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#contact"
                    //  TODO: Add a comment explaining what this logic is doing

                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                    <AiFillContacts/>Contact
                </a>
            </li>
        </ul>
        </nav>
    );
}

export default NavTabs;