import './About.css'
import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
    DiJsBadge,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiJava,
    DiGithubBadge,
    DiBootstrap,
    DiMysql,


} from "react-icons/di";
import { SiHandlebarsdotjs, 
    SiAngularjs, 
    SiMicrosoftazure, 
    SiPython, 
    SiDjango, 
    SiPostgresql,
    SiGraphql} from "react-icons/si";
const iconStyle = {
    height: '90px',
    width: '90px'
    
}


function Techstack() {
    return (
        <div className='row d-flex justify-content-evenly' style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <div className="col tech-icons">
                <div className='card tech-card align-items-center'>
                    <CgCPlusPlus style={iconStyle}/><p className='card-text'>C++</p>
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card tech-card align-items-center'>
                    <DiJsBadge style={iconStyle}/><p className='card-text'>Javascript</p>
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card tech-card align-items-center'>
                    <DiNodejs style={iconStyle}/><p className='card-text'>Node.js</p>
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card tech-card align-items-center'>
                    <DiReact style={iconStyle}/><p className='card-text'>React.js</p>
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card tech-card align-items-center'>
                    <DiMongodb style={iconStyle}/><p className='card-text'>MongoDB</p>
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card tech-card align-items-center'>
                    <DiJava style={iconStyle}/><p className='card-text'>Java</p>
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card tech-card align-items-center'>
                    <DiGithubBadge style={iconStyle}/><p className='card-text'>Github</p>
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card tech-card align-items-center'>
                    <SiHandlebarsdotjs style={iconStyle}/><p className='card-text'>Handlebars.js</p>
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card tech-card align-items-center'>
                    <DiBootstrap style={iconStyle}/><p className='card-text'>Bootstrap</p>
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card tech-card align-items-center'>
                    <DiMysql style={iconStyle}/><p className='card-text'>MySQL</p>
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card tech-card align-items-center'>
                    <SiAngularjs style={iconStyle}/><p className='card-text'>Angular.js</p>
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card tech-card align-items-center'>
                    <SiMicrosoftazure style={iconStyle}/><p className='card-text'>Azure</p>
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card tech-card align-items-center'>
                    <SiPython style={iconStyle}/><p className='card-text'>Python</p>
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card tech-card align-items-center'>
                    <SiDjango style={iconStyle}/><p className='card-text'>Django</p>
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card tech-card align-items-center'>
                    <SiPostgresql style={iconStyle}/><p className='card-text'>PostgresSQL</p>
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card tech-card align-items-center'>
                    <SiGraphql style={iconStyle}/><p className='card-text'>GraphQL</p>
                </div>
            </div>
        </div>
    );
}

export default Techstack;