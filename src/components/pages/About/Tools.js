import './About.css'
import React from 'react';

import {
    SiWindows,
    SiHeroku,
    SiInsomnia,
    SiJetbrains,
    SiVisualstudio,
    SiEclipseide,
    SiPowershell,
    SiSlack,
    SiDiscord,
    SiMicrosoftteams,
    SiPostman,
    SiDocker

} from 'react-icons/si'

import {DiGit} from 'react-icons/di'

const iconStyle = {
    height: '90px',
    width: '90px',
    backgroundColor: '#0B7A75',
}

function Tools(){
    return(
        <div className='row' style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <div className="col tech-icons">
                <div className='card tech-card align-items-center' style={{backgroundColor: '#0B7A75'}}>
                    <SiWindows style={iconStyle}/>Windows
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card tech-card align-items-center' style={{backgroundColor: '#0B7A75'}}>
                    <SiHeroku style={iconStyle}/>Heroku
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card tech-card align-items-center' style={{backgroundColor: '#0B7A75'}}>
                    <SiJetbrains style={iconStyle}/>Jetbrains
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card tech-card align-items-center' style={{backgroundColor: '#0B7A75'}}>
                    <SiVisualstudio style={iconStyle}/>VisualStudioCode
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card tech-card align-items-center' style={{backgroundColor: '#0B7A75'}}>
                    <SiEclipseide style={iconStyle}/>Eclipse
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card tech-card align-items-center' style={{backgroundColor: '#0B7A75'}}>
                    <SiInsomnia style={iconStyle}/>Insomnia
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card tech-card align-items-center' style={{backgroundColor: '#0B7A75'}}>
                    <SiDiscord style={iconStyle}/>Discord
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card tech-card align-items-center' style={{backgroundColor: '#0B7A75'}}>
                    <SiSlack style={iconStyle}/>Slack
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card tech-card align-items-center' style={{backgroundColor: '#0B7A75'}}>
                    <SiPowershell style={iconStyle}/>PowerShell
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card tech-card align-items-center' style={{backgroundColor: '#0B7A75'}}>
                    <SiMicrosoftteams style={iconStyle}/>Teams
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card tech-card align-items-center' style={{backgroundColor: '#0B7A75'}}>
                    <DiGit style={iconStyle}/>Git Bash
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card tech-card align-items-center' style={{backgroundColor: '#0B7A75'}}>
                    <SiPostman style={iconStyle}/>Postman
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card tech-card align-items-center' style={{backgroundColor: '#0B7A75'}}>
                    <SiDocker style={iconStyle}/>Docker
                </div>
            </div>
        </div>
    )
}
export default Tools

