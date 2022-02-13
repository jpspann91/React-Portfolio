import React from 'react';
import Typewriter from 'typewriter-effect'
import homeLogo from '../../../Assets/homepage.png'
import homepageBg from '../../../Assets/homepage-bg.jpg';
import profilePicture from '../../../Assets/joespann.jpg';
import Tilt from "react-parallax-tilt";
import {shake} from 'react-animations';
import styled, {keyframes} from 'styled-components';

// const bounceShake = merge(bounce, shake)
const Shake = styled.div`animation: 2s ${keyframes `${shake}`} infinite`


const styles = {
  color: 'white',
  backgroundImage: `url(${homepageBg})`,
  backgroundPosition: 'fixed',
  backgroundSize: 'cover',
  overflow: 'hidden',
  backgroundAttachment: 'fixed',
  width: '100vw',
  height: '100vh',
}

const typeWriterStrings = [
  'Junior Software Developer',
  "MERN Stack Developer",
  'IT Apprentice',
  'Customer Service Specialist',
  'Nak Muay'
]

const languageStrings = [
  'Javascript', 'HTML', 'CSS',
  'Java', 'C++', 'MYSQL'
]

export default function Home() {
  return (
    <section style={styles}>
      <div className='container-fluid d-flex flex-row flex-wrap'>
        <div className='row fluid d-flex-flex-row' style={{position:'relative'}}>
          <div className='col-8'>
            <h1>Hi there!
              <Shake>
              <span className='wave' role='img' aria-labelledby='wave'>👋🏻</span>
              </Shake>
              My Name is <p className='myName' style={{ color: 'red' }}>Joseph Spann</p>
            </h1>

            <p style={{ color: 'coral' }}>
              <Typewriter
                className='typewrite'
                options={{
                  strings: typeWriterStrings,
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 65,
                  cursor: '🥊'
                }} />
            </p>
          </div>

          <div className='col-4 fluid flex'>
            <img src={homeLogo} alt='homepage logo' className='img-fluid' style={{ position:'absolute', float: 'right'}} />
          </div>
        </div>
        <div className='row intro-sentence'>
          <div className='col-3'>
            <Tilt>
              <img src={profilePicture} className="img-fluid profilePic" alt="myself" style={{ objectFit: '' }} />
            </Tilt>

          </div>

          <div className='col'>
            <h1>LET ME <span style={{ color: 'purple' }}>INTRODUCE</span> MYSELF</h1>
            <p className='intro-para'>I am currently seeking to become a Junior software engineer. As a developer I like to venture into current technologies and build interesting and productive applications for everyday use

              <br />
              <br />
              I have experience coding with {" "}
              <i>
                <b style={{ color: 'coral' }}>
                  <Typewriter style={{ textColor: 'red' }}
                    className='typewrite'
                    options={{
                      strings: languageStrings,
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 65,
                      cursor: '🖥️'
                    }} />
                </b>
              </i>
              <br />
              <i>
                <p>
                  My field of interest are completely open to anything at this time. I would love to get into <span style={{ color: 'purple' }}>Mobile Development </span> and I have experience with both front end and back-end devleopment practices.
                </p>
              </i>
              <i>
                <p>I enjoy building dependable applications with moder frameworks such as <span style={{ color: 'coral' }}>Express.js, Node.js, React.js </span> and many other frameworks</p>
              </i>
            </p>
          </div>
        </div>


      </div>
    </section>
  );
}