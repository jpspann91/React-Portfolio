import React from 'react';
import Typewriter from 'typewriter-effect'
// import homeLogo from '../../../Assets/homepage.png'
import homepageBg from '../../../Assets/homepage-bg.jpg';
import profilePicture from '../../../Assets/joespann.jpg';
// import Tilt from "react-parallax-tilt";
import { shake, pulse } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import './Home.css'
import LanguageCarousel from './LanguageCarousel'

// const bounceShake = merge(bounce, shake)
const Shake = styled.div`animation: 2s ${keyframes`${shake}`} infinite`

const Pulse = styled.div`animation: 2s ${keyframes`${pulse}`} infinite`

const styles = {
  color: '#8661C1',
  backgroundImage: `url(${homepageBg})`,
  backgroundPosition: 'fixed',
  backgroundSize: 'cover',
  overflow: 'hidden',
  backgroundAttachment: 'fixed',

}

const typeWriterStrings = [
  'Full Stack Developer',
  'MERN/ MEAN Stack Developer',
  'Django Developer',
  'IT Apprentice',
  'Customer Service Specialist',
  'Nak Muay'
]


export default function Home() {
  return (
    <section style={styles}>
      <div className='container-fluid d-flex flex-row flex-wrap justify-content-center'>
        <div className='mt-5 row fluid d-flex-flex-row align-items-center' style={{ justifyContent: 'center' }}>
          <div className='col-4'>
            <h1>Hi there!
              <Shake>
                👋🏻
              </Shake>
            </h1>
            <h2>My Name is <span className='myName'>Joseph Spann</span></h2>

            <span className='typewriter'>
              <Typewriter

                options={{
                  strings: typeWriterStrings,
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 75,
                  cursor: '|'
                }} />
            </span>
          </div>
          <div className='col-6'>
            <Pulse>
              <img src={profilePicture} className="img-fluid profilePic" alt="myself" />
            </Pulse>

          </div>


          {/* <div className='col-6 fluid flex'>
            <img src={homeLogo} alt='homepage logo' className='img-fluid float-right' style={{ right:'0'}} />
          </div> */}
        </div>

          <br/><br/>
        <div className='mt-5 row d-flex flex-row flex-wrap intro-container'>

          
          <div className='border border-dark col-6 shadow-lg rounded p-3 mb-5 intro-sentence'>
            <h1><span className='tomato'>ABOUT</span> ME</h1>
            <p className='intro-para'>Currently a Full Stack Develop for Global Tek Med IT. 
            GTMIT specializes in assisting US Veterans with increasing their disability rating with the VA, creating a better future for those who fought to preserve it.  
            As a developer with 10+ years of customer service experience, I have great communications skills and I develop with the client in mind first. 
            I work to develop applications and automations that are intuitive to use, and help reduce the cost of day to day business needs. 

              <br />
              <br />
              I have experience coding with {" "}
              <i>
                <LanguageCarousel></LanguageCarousel>
              </i>
              <br />
              <i>
                <p>
                  I have experience in multiple development stacks at this time. 
                  I have experience with React.js and the MERN stack as well as experience with Angular.js and the MEAN stack. 
                  Additionally, I currently develop using Python with the Django framework. 
                </p>
                <p>I enjoy building dependable and scalable applications with modern frameworks that are up to standard with todays industry</p>
              </i>
            </p>
          </div>
        </div>


      </div>
    </section>
  );
}