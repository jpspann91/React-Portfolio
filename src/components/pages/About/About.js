import React from 'react';
import AboutCard from './AboutCard';
import Github from './Github';
import TechStack from './Techstack';
import Tools from './Tools';
const aboutPic = require('../../../Assets/about.png') 

export default function About() {
  return (
    <div className='container'>
      
      <div className='row about-card'>
      <img src={aboutPic} alt='computer science stuff' className='img-fluid'/>
      <h1>Get to Know Me</h1>
        <AboutCard/>
        
      </div>
      
      <div className='row github'>
        <Github/> 
      </div>
      <h1>Professional Skillset</h1>
      <div className='row'>
        <TechStack/>
      </div>
      <h1>Tools I Use</h1>
      <div className='row'>
        <Tools/>
      
      </div>
      
    </div>
  );
}