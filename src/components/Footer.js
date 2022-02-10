import React from 'react'
import {
    AiFillGithub,
    AiFillGitlab,
    AiFillLinkedin,
    AiOutlineMail

} from 'react-icons/ai'
import { FaStackOverflow } from 'react-icons/fa'

function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <footer className='container footer' style={{backgroundColor: 'tomato'}}>
            <div className='row'>
                <div className='col-6'>
                    <h3>Designed and Developed by Joseph Spann</h3>
                </div>
                <div className='col-2'>
                    Copyright © {year} JS
                </div>
                <div className='col-4'>
                    <ul className='footer-icons nav'style={{listStyleType: "none", display: 'flex inline-block', justifyContent: 'space-between'}}>
                        <li className='social-icons'>
                            <a href='https://github.com'
                                style={{ color: "purple" }}
                                target="_blank"
                                rel="noopener noreferrer">
                                <AiFillGithub />
                            </a>
                        </li>
                        <li className='social-icons'>
                            <a href='https://gitlab.com/joespann91'
                                style={{ color: "purple" }}
                                target="_blank"
                                rel="noopener noreferrer">
                                <AiFillGitlab />
                            </a>
                        </li>
                        <li className='social-icons'>
                            <a href='https://www.linkedin.com/in/joseph-spann-12a684140/'
                                style={{ color: "purple" }}
                                target="_blank"
                                rel="noopener noreferrer">
                                <AiFillLinkedin />
                            </a>
                        </li>
                        <li className='social-icons'>
                            <a href='mailto:joespann91@gmail.com'
                                style={{ color: "purple" }}
                                target="_blank"
                                rel="noopener noreferrer">
                                <AiOutlineMail/>
                            </a>
                        </li>
                        <li className='social-icons'>
                            <a href='https://stackoverflow.com/users/16654336/joseph-spann'
                                style={{ color: "purple" }}
                                target="_blank"
                                rel="noopener noreferrer">
                                <FaStackOverflow />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        </footer>
    )
}
export default Footer