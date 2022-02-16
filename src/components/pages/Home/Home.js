import React from 'react';
import Typewriter from 'typewriter-effect'
// import homeLogo from '../../../Assets/homepage.png'
import homepageBg from '../../../Assets/homepage-bg.jpg';
import profilePicture from '../../../Assets/joespann.jpg';
import Tilt from "react-parallax-tilt";
import { shake } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import './Home.css'

// const bounceShake = merge(bounce, shake)
const Shake = styled.div`animation: 2s ${keyframes`${shake}`} infinite`


const styles = {
  color: '#8661C1',
  backgroundImage: `url(${homepageBg})`,
  backgroundPosition: 'fixed',
  backgroundSize: 'cover',
  overflow: 'hidden',
  backgroundAttachment: 'fixed',

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
        <div className='row fluid d-flex-flex-row' style={{ justifyContent: 'center' }}>

    {/* <div className='col-4'></div> */}
          <div className='col-4 align-self-center'>
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
                  deleteSpeed: 65,
                  cursor: '|'
                }} />
            </span>
          </div>
          <div className='col-4'>
            <Tilt>
              <img src={profilePicture} className="img-fluid profilePic" alt="myself" />
            </Tilt>

          </div>


          {/* <div className='col-6 fluid flex'>
            <img src={homeLogo} alt='homepage logo' className='img-fluid float-right' style={{ right:'0'}} />
          </div> */}
        </div>

          <br/><br/>
        <div className='row d-flex flex-row flex-wrap intro-container'>

          <div className='col-2'></div>
          <div className='col-8 intro-sentence'>
            <h1>LET ME <span className='tomato'>INTRODUCE</span> MYSELF</h1>
            <p className='intro-para'>I am currently seeking to become a Junior software engineer. As a developer I like to venture into current technologies and build interesting and productive applications for everyday use

              <br />
              <br />
              I have experience coding with {" "}
              <i>
                <b className='lavendar'>
                  <Typewriter
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
                  My field of interest are completely open to anything at this time. I would love to get into <span className='lavendar'>Mobile Development </span> and I have experience with both front end and back-end devleopment practices.
                </p>
              </i>
              <i>
                <p>I enjoy building dependable applications with moder frameworks such as <span className='tomato'>Express.js, Node.js, React.js </span> and many other frameworks</p>
              </i>
            </p>
          </div>
        </div>


      </div>
    </section>
  );
}