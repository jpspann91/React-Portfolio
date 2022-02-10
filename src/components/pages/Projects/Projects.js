import React from 'react';
import ProjectCard from './ProjectCards';


import eCommerceSite from '../../../Assets/ProjectImages/project2.png'
import findYaPokemon from '../../../Assets/ProjectImages/Find-Ya-Pokemon Screenshot.jpg'
import blockChain from '../../../Assets/ProjectImages/blockchain.jpg'
import codeQuiz from '../../../Assets/ProjectImages/code_quiz.jpg'
import horiseon from '../../../Assets/ProjectImages/horiseon.png'
import passwordGenerator from '../../../Assets/ProjectImages/password_generator.jpg'
import treasureGame from '../../../Assets/ProjectImages/treasuregame.jpg'
import weatherDashboard from '../../../Assets/ProjectImages/weather_dashboard.jpg'
import workdayPlanner from '../../../Assets/ProjectImages/work_planner.jpg'

function Projects() {
  return (
    <div className='container-fluid fluid-container fluid container'>
      <h1>My Recent Projects</h1>

      <div className='row ' style={{ justifyContent: 'center', paddingBottom: '10px' }}>

        <div className='col card-deck' style={{display: 'inline-flex', justifyContent:'space-between'}}>
        <ProjectCard 
          imgUrl={eCommerceSite}
          isDeployed={true}
          title='E-Commerce Site'
          description='An E-Commerce website built with Handlebars.js. Allows users to create an admin account to start selling products on the site. Users can also create a buyer account so they purchase items as well. Stripe is used to manage payment. Users can view past orders as well.'
          deployedLink='https://e-commerce-store-w-stripe-2022.herokuapp.com//'
          gitHubRepo='https://github.com/DavisRansom/E-Commerce-Marketplace' />


        <ProjectCard
          imgUrl={findYaPokemon}
          isDeployed={true}
          title='Horiseon Code Refractor'
          description='A fun and simple website built with DOM manipulation. You can look up your favorite pokemon view an image from the official trading card game and find a sprite. You can also build a small team of 6 pokemon with four randomly generated moves'
          deployedLink='https://jmyoung93.github.io/Find-Ya-Pokemon//'
          gitHubRepo='https://github.com/JMYoung93/Find-Ya-Pokemon' />


        <ProjectCard
          imgUrl={blockChain}
          isDeployed={false}
          title='BlockChain Basics'
          description='A simple program to show the basics of blockchain. It uses p2p messaging and servers to connect to a blockchain wallet (not provided). Uses a miner to encrypt the blockchain and merkle nodes to link them together.'
          gitHubRepo='https://github.com/jpspann91/BlockchainBasics' />
          </div>

      </div>

      <div className='row card-deck' style={{ justifyContent: 'center', paddingBottom: '10px' }}>

      <div className='col card-deck' style={{display: 'inline-flex', justifyContent:'space-between'}}>
        <ProjectCard
          imgUrl={codeQuiz}
          isDeployed={true}
          title='Code Quiz'
          description='A very simple coding quiz built with CSS, HTML and DOM manipulation. Can be built on to include more questions and more features if needed'
          deployedLink='https://jpspann91.github.io/CodeQuiz/'
          gitHubRepo='https://github.com/jpspann91/CodeQuiz' />


        <ProjectCard
          imgUrl={horiseon}
          isDeployed={true}
          title='Horiseon Code Refractor'
          description='Refactored a current website to meet accessibility requiremenet. HTML elemenets help make it easy for a screen reader to identify certain sections of the webstie properly for those who are unable to see.'
          deployedLink='https://jpspann91.github.io/CodeQuiz/'
          gitHubRepo='https://github.com/jpspann91/CodeQuiz' />


        <ProjectCard
          imgUrl={passwordGenerator}
          isDeployed={true}
          title='Password Generator'
          description='A simple application to help you build a strong password. Prompts user with a couple of different questions like length, lowercase letters, uppercase letters, numbers and special characters. Then it creates a password to be used. '
          deployedLink='https://jpspann91.github.io/PasswordGenerator/'
          gitHubRepo='https://github.com/jpspann91/PasswordGenerator' />
          </div>

      </div>
      <div className='row card-deck' style={{ justifyContent: 'center', paddingBottom: '10px' }}>
      <div className='col card-deck' style={{display: 'inline-flex', justifyContent:'space-between'}}>
        <ProjectCard
          imgUrl={treasureGame}
          isDeployed={false}
          title='Treasure Game'
          description='An application built with Java. Finding a treasure rewards 1-3 points. Finding a troll means you loose all your gold. You have 25 tries to get a high score. Built as a final project for a beginners Java class. No live site currently'
          
          gitHubRepo='https://github.com/jpspann91/TreasureGame' />

        <ProjectCard
          imgUrl={weatherDashboard}
          isDeployed={true}
          title='Weather Dashboard'
          description='Application to look up the weather forecast in a city of your choice. Tyope into the search bar, hit enter, and you will be able to see the current weather for the city searched as well as a 5 day forecast. Also saves recently searched cities as well.'
          deployedLink='https://jpspann91.github.io/WeatherDashboard'
          gitHubRepo='https://github.com/jpspann91/WeatherDashboard' />

        <ProjectCard
          imgUrl={workdayPlanner}
          isDeployed={true}
          title='Workday Planner'
          description='An application to help you organize your workday. Lets you add task by the hour and also lets users edit and delete tasks as needed. Color will also change if the event is in the past as well.'
          deployedLink='https://jpspann91.github.io/CodeQuiz/'
          gitHubRepo='https://github.com/jpspann91/CodeQuiz' />
          </div>

      </div>

    </div>
  );
}

export default Projects