import React from 'react';
import './About.css'
import AboutCard from './AboutCard';
import Github from './Github';
import TechStack from './Techstack';
import Tools from './Tools';

const aboutPic = require('../../../Assets/about.png') 


export default function About() {
  return (
    
    <div className='aboutContainer'>
      
      <div className='row about-card'>
      <h1>Get to <span className='tomato'>Know</span> Me</h1>
        <AboutCard/>
        
      </div>
      
      <div className='row github'>
        <Github/> 
      </div>
      <h1>Professional <span className='tomato'>Skillset</span></h1>
      <div className='row'>
        <TechStack/>
      </div>
      <h1><span className='tomato'>Tools</span> I Use</h1>
      <div className='row'>
        <Tools/>
      
      </div>
      
    </div>
  );
}
