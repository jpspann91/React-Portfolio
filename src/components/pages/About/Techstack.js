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
    color: 'slateblue',
    height: '100px',
    width: '100px'
}

function Techstack() {
    return (
        <div className='row' style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <div className="col tech-icons">
                <div className='card align-items-center' style={{color: 'slateblue'}}>
                    <CgCPlusPlus style={iconStyle}/>C++
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card align-items-center' style={{color: 'slateblue'}}>
                    <DiJsBadge style={iconStyle}/>Javascript
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card align-items-center' style={{color: 'slateblue'}}>
                    <DiNodejs style={iconStyle}/>Node.js
                </div>
            </div>
            <div className="col tech-icons" style={{color: 'slateblue'}}>
                <div className='card align-items-center'>
                    <DiReact style={iconStyle}/>React.js
                </div>
            </div>
            <div className="col tech-icons" style={{color: 'slateblue'}}>
                <div className='card align-items-center'>
                    <DiMongodb style={iconStyle}/>MonogDB
                </div>
            </div>
            <div className="col tech-icons" style={{color: 'slateblue'}}>
                <div className='card align-items-center'>
                    <DiJava style={iconStyle}/>Java
                </div>
            </div>
            <div className="col tech-icons" style={{color: 'slateblue'}}>
                <div className='card align-items-center'>
                    <DiGit style={iconStyle}/>GitHub
                </div>
            </div>
            <div className="col tech-icons" style={{color: 'slateblue'}}>
                <div className='card align-items-center' style={{color: 'slateblue'}}>
                    <SiHandlebarsdotjs style={iconStyle}/>Handlebars.js
                </div>
            </div>
            <div className="col tech-icons" style={{color: 'slateblue'}}>
                <div className='card align-items-center'>
                    <DiBootstrap style={iconStyle}/>Bootstrap
                </div>
            </div>
            <div className="col tech-icons" style={{color: 'slateblue'}}>
                <div className='card align-items-center'>
                    <DiMysql style={iconStyle}/>MYSQL
                </div>
            </div>
        </div>
    );
}

export default Techstack;