import React from 'react';
import Typewriter from './TypeWriter'
import homeLogo from '../../../Assets/homepage.png'
import homepageBg from '../../../Assets/homepage-bg.jpg';
import profilePicture from '../../../Assets/joespann.jpg';
import Tilt from "react-parallax-tilt";

const styles = {
  color: 'white',
  backgroundImage: `url(${homepageBg})`,
  backgroundPosition: 'fixed',
  backgroundSize: 'cover',
  backgroundRepeat: 'repeat',
  width: '100vw',
  height: '100vh',
}



export default function Home() {
  return (
    <section style={styles}>
      <div className='container-fluid d-flex flex-row flex-wrap'>
        <div className='row fluid'>
          <div className='col'>
            <h1>Hi there!
              <span className='wave' role='img' aria-labelledby='wave'>👋🏻</span>
              My Name is <p className='myName' style={{ color: 'red' }}>Joseph Spann</p>
            </h1>


            <Typewriter style={{textColor: 'red'}}/>
          </div>

          <div className='col fluid'>
            <img src={homeLogo} alt='homepage logo' className='img-fluid' style={{ marginLeft: '200px' }} />
          </div>
        </div>
        <div className='row intro-sentence'>
          <div className='col-4'>
            <Tilt>
              <img src={profilePicture} className="img-fluid profilePic" alt="myself" width='50%' height='25px'/>
            </Tilt>

          </div>

          <div className='col'>
            <h1>LET ME <span style={{ color: 'purple' }}>INTRODUCE</span> MYSELF</h1>
            <p className='intro-para'>I am currently seeking to become a Junior software engineer. As a developer I like to venture into current technologies and build interesting and productive applications for everyday use

              <br />
              <br />
              I am fluent in the basic like {" "}
              <i>
                <b style={{ color: 'coral' }}>
                  Javascript, HTML, CSS.
                </b>
              </i>
              I also have some experience with {" "}
              <i>
                <b style={{ color: 'goldenrod' }}>
                  MYSQL, Java, and C++.
                </b>
              </i>
              <br />
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