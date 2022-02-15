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
    SiDiscord

} from 'react-icons/si'


const iconStyle = {
    height: '90px',
    width: '90px',
    backgroundColor: '#ff5b47',
}

function Tools(){
    return(
        <div className='row' style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <div className="col tech-icons">
                <div className='card tech-card align-items-center' style={{backgroundColor: '#ff5b47'}}>
                    <SiWindows style={iconStyle}/>Windows
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card tech-card align-items-center' style={{backgroundColor: '#ff5b47'}}>
                    <SiHeroku style={iconStyle}/>Heroku
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card tech-card align-items-center' style={{backgroundColor: '#ff5b47'}}>
                    <SiJetbrains style={iconStyle}/>Jetbrains
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card tech-card align-items-center' style={{backgroundColor: '#ff5b47'}}>
                    <SiVisualstudio style={iconStyle}/>VisualStudioCode
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card tech-card align-items-center' style={{backgroundColor: '#ff5b47'}}>
                    <SiEclipseide style={iconStyle}/>Eclipse
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card tech-card align-items-center' style={{backgroundColor: '#ff5b47'}}>
                    <SiInsomnia style={iconStyle}/>Insomnia
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card tech-card align-items-center' style={{backgroundColor: '#ff5b47'}}>
                    <SiDiscord style={iconStyle}/>Discord
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card tech-card align-items-center' style={{backgroundColor: '#ff5b47'}}>
                    <SiSlack style={iconStyle}/>Slack
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card tech-card align-items-center' style={{backgroundColor: '#ff5b47'}}>
                    <SiPowershell style={iconStyle}/>PowerShell
                </div>
            </div>
        </div>
    )
}
export default Tools

