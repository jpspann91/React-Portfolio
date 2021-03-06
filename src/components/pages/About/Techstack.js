import './About.css'
import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
    DiJsBadge,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiJava,
    DiGit,
    DiBootstrap,
    DiMysql
} from "react-icons/di";
import { SiHandlebarsdotjs } from "react-icons/si";
const iconStyle = {
    height: '90px',
    width: '90px'
    
}


function Techstack() {
    return (
        <div className='row' style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <div className="col tech-icons">
                <div className='card tech-card align-items-center' style={{backgroundColor: '#0B7A75'}}>
                    <CgCPlusPlus style={iconStyle}/><p className='card-text'>C++</p>
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card tech-card align-items-center' style={{backgroundColor: '#0B7A75'}}>
                    <DiJsBadge style={iconStyle}/><p className='card-text'>Javascript</p>
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card tech-card align-items-center' style={{backgroundColor: '#0B7A75'}}>
                    <DiNodejs style={iconStyle}/><p className='card-text'>Node.js</p>
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card tech-card align-items-center' style={{backgroundColor: '#0B7A75'}}>
                    <DiReact style={iconStyle}/><p className='card-text'>React.js</p>
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card tech-card align-items-center' style={{backgroundColor: '#0B7A75'}}>
                    <DiMongodb style={iconStyle}/><p className='card-text'>MongoDB</p>
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card tech-card align-items-center' style={{backgroundColor: '#0B7A75'}}>
                    <DiJava style={iconStyle}/><p className='card-text'>Java</p>
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card tech-card align-items-center' style={{backgroundColor: '#0B7A75'}}>
                    <DiGit style={iconStyle}/><p className='card-text'>Github</p>
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card tech-card align-items-center' style={{backgroundColor: '#0B7A75'}}>
                    <SiHandlebarsdotjs style={iconStyle}/><p className='card-text'>Handlebars.js</p>
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card tech-card align-items-center' style={{backgroundColor: '#0B7A75'}}>
                    <DiBootstrap style={iconStyle}/><p className='card-text'>Bootstrap</p>
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card tech-card align-items-center' style={{backgroundColor: '#0B7A75'}}>
                    <DiMysql style={iconStyle}/><p className='card-text'>MySQL</p>
                </div>
            </div>
        </div>
    );
}

export default Techstack;