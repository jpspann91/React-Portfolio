import React from 'react';
import {GiEnergyArrow} from 'react-icons/gi'

function AboutCard() {
    return (
        <div className='card' quote-card-view>
            <div className='card-body'>
                <blockquote>
                    <p style={{ textAlign: "justify" }}>
                        Hello, I am <span className="purple">Joseph Spann </span>
                        from <span className="purple"> San Diego, California, USA.</span>
                        <br />I am an aspiring junior software engineer with an associates degree in computer science. Currently I am working completing a cerficate program for full stack development at UCSD extension here in San Diego. 
                        <br />
                        <br />
                        Apart from programming, some other activities that I love to do!
                    </p>
                    <ul>
                        <li className="about-activity">
                            <GiEnergyArrow /> Playing Video Games
                        </li>
                        <li className="about-activity">
                            <GiEnergyArrow /> Going Hiking
                        </li>
                        <li className="about-activity">
                            <GiEnergyArrow /> Travelling
                        </li>
                        <li className="about-activity">
                            <GiEnergyArrow /> Training in Muay Thai
                        </li>
                        <li className="about-activity">
                            <GiEnergyArrow /> Watching Fights
                        </li>
                        <li className="about-activity">
                            <GiEnergyArrow /> Watching Anime
                        </li>
                    </ul>

                    <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
                        "Optimism is an occupational hazard of programming: feedback is the treatment" {" "}-Kent Beck
                    </p>
                    
                </blockquote>
            </div>
        </div>
    )
}
export default AboutCard;