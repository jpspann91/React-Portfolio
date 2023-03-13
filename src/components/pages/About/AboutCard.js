import React from 'react';
import { GiEnergyArrow } from 'react-icons/gi'
import './About.css'

function AboutCard() {
    return (
        <div className='card quote-card-view aboutCardContainer' >
            <div className='card-body'>
                <blockquote>
                    <p style={{ color: 'black', textAlign: "center" }}>
                        Hello, I am <span className="purple">Joseph Spann </span>
                        from <span className="purple"> San Diego, California, USA.</span>
                        I am a Full Stack Developer currently working on assiting US Veterans with increasing their disability ratings with the VA. 
                        I am a part of a team that develops major applications to create simple solutions to complex VA processes. 
                        Additionally, I create automations that help reduce business costs and assist with day to day business needs. 
                        <br />
                        <br />
                        Apart from programming, some other activities that I love to do!
                    </p>
                    <ul>
                        <li style={{ listStyleType: "none" }} className="about-activity">
                            <GiEnergyArrow /> Playing Video Games
                        </li>
                        <li style={{ listStyleType: "none" }} className="about-activity">
                            <GiEnergyArrow /> Going Hiking
                        </li>
                        <li style={{ listStyleType: "none" }} className="about-activity">
                            <GiEnergyArrow /> Travelling with my beautiful wife
                        </li>
                        <li style={{ listStyleType: "none" }} className="about-activity">
                            <GiEnergyArrow /> Training/ Coaching Muay Thai
                        </li>
                        <li style={{ listStyleType: "none" }} className="about-activity">
                            <GiEnergyArrow /> Watching Fights and Anime
                        </li>
                    </ul>

                    <p style={{ marginBlockEnd: 0, color: "black" }}>
                        "Optimism is an occupational hazard of programming: feedback is the treatment" {" "}-Kent Beck
                    </p>

                </blockquote>
            </div>
        </div>
    )
}
export default AboutCard;