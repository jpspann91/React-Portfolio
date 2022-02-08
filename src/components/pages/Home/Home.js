import React from 'react';
import Typerwriter from './TypeWriter'
import homeLogo from '../../../Assets/homepage.png'
import homepageBg from '../../../Assets/homepage-bg.jpg'

const styles = {
  color: 'white',
  backgroundImage: `url(${homepageBg})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100vw',
  height: '100vh',
}



export default function Home() {
  return (
    <section style={styles}>
      <div className='container-fluid d-flex flex-row flex-wrap justify-space-between'>
        <div className='row fluid'>
          <div className='col'>
            <h1>Hi there!
              <span className='wave' role='img' aria-labelledby='wave'>👋🏻</span>
              My Name is <p className='myName' style={{ color: 'red' }}>Joseph Spann</p>
            </h1>


            <Typerwriter />
          </div>

        </div>
        <div className='col fluid'>
          <img src={homeLogo} alt='homepage logo' className='img-fluid' style={{marginLeft: '200px'}} />
        </div>

      </div>
    </section>
  );
}