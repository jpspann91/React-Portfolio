import React from 'react';
import AboutCard from './AboutCard';
import Github from './Github';
import TechStack from './Techstack'

export default function About() {
  return (
    <div className='container'>
      <h1>About PAGE</h1>
      <div className='row about-card'>
        <AboutCard/>
      </div>
      
      <div className='row github'>
        <Github/> 
      </div>
      <h1>Professional Skillset</h1>
      <div className='row'>
        <TechStack/>
      </div>
      <div className='row'></div>
      
    </div>
  );
}