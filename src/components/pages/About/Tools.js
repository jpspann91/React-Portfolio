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
    color: 'slateblue',
    height: '100px',
    width: '100px'
}

function Tools(){
    return(
        <div className='row' style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <div className="col tech-icons">
                <div className='card align-items-center'style={{color: 'slateblue'}}>
                    <SiWindows style={iconStyle}/>Windows
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card align-items-center'style={{color: 'slateblue'}}>
                    <SiHeroku style={iconStyle}/>Heroku
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card align-items-center'style={{color: 'slateblue'}}>
                    <SiJetbrains style={iconStyle}/>Jetbrains
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card align-items-center'style={{color: 'slateblue'}}>
                    <SiVisualstudio style={iconStyle}/>VisualStudioCode
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card align-items-center'style={{color: 'slateblue'}}>
                    <SiEclipseide style={iconStyle}/>Eclipse
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card align-items-center'style={{color: 'slateblue'}}>
                    <SiInsomnia style={iconStyle}/>Insomnia
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card align-items-center'style={{color: 'slateblue'}}>
                    <SiDiscord style={iconStyle}/>Discord
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card align-items-center'style={{color: 'slateblue'}}>
                    <SiSlack style={iconStyle}/>Slack
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card align-items-center'style={{color: 'slateblue'}}>
                    <SiPowershell style={iconStyle}/>PowerShell
                </div>
            </div>
        </div>
    )
}
export default Tools

