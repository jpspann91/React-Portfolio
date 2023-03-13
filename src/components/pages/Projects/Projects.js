import React from 'react';
import './Projects.css'
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
import dbqpro from '../../../Assets/ProjectImages/dbqpro.png'
import dbqdoc from '../../../Assets/ProjectImages/dbqdoc.png'
import nexusGDB from '../../../Assets/ProjectImages/nexus.png'

function Projects() {
  return (
    <div className='container-fluid d-flex flex-row flex-wrap justify-content-around projects-container'>
      <h1 className='green'>My Recent Projects</h1>

      <div className='row container-fluid d-flex flex-row flex-wrap justify-content-around' style={{ justifyContent: 'center', paddingBottom: '10px' }}>

        <div className='container-fluid d-flex flex-row flex-wrap justify-content-around'>
        <ProjectCard
          height='35rem'
          width='18rem'
          imgUrl={dbqpro}
          isDeployed={true}
          title='DBQPro'
          description='Web Application built with Python Django framework. Assists US Veterans with increasing their disability benefits with the Department of Veteran Affairs. Gives them a form to fill out which ultimately maps to a PDF. This PDF is the form which they submit to the VA to get an increase in their benefits.'
          deployedLink='https://dbqpro-development.azurewebsites.net/'
          gitHubRepo='https://github.com/info-gtmit/DBQPro' />


        <ProjectCard
          height='38rem'
          width='18rem'
          imgUrl={dbqdoc}
          isDeployed={true}
          title='DBQDoc'
          description='A Web application built with Python Django framework to give Doctors the ability to revise medical forms filled out by a US Veteran. Gives the US Veteran a better chance of having their disability claim accepted by the VA when signed by a certified doctor. Allows doctors to schedule full body assessments with the US Veteran and certify their claims with the Department of Veteran affairs'
          deployedLink='https://dbqdoc-develop.azurewebsites.net/'
          gitHubRepo='https://github.com/info-gtmit/DBQDoc' />


        <ProjectCard
          height='35rem'
          width='18rem'
          imgUrl={nexusGDB}
          isDeployed={true}
          title='Nexus Game Dashboard'
          description='An asynchronous turn based game application that allows you to play simple games with your friends. Sign up to play classic games like Tik Tak Toe and Connect 4, challenge your friends and receive notifications when it is your turn to play. Can be used on all mobile devices and computer screens'
          deployedLink='https://nexus-game-dashboard.herokuapp.com/'
          gitHubRepo='https://github.com/jpspann91/Project3' />
          </div>

      </div>

      <div className='row container-fluid d-flex flex-row flex-wrap justify-content-around' style={{ justifyContent: 'center', paddingBottom: '10px' }}>

        <div className='container-fluid d-flex flex-row flex-wrap justify-content-around'>
        <ProjectCard 
          height='30rem'
          width='18rem'
          imgUrl={eCommerceSite}
          isDeployed={true}
          title='E-Commerce Site'
          description='An E-Commerce website built with Handlebars.js. Allows users to create an admin account to start selling products on the site. Users can also create a buyer account so they purchase items as well. Stripe is used to manage payment. Users can view past orders as well.'
          deployedLink='https://e-commerce-store-w-stripe-2022.herokuapp.com//'
          gitHubRepo='https://github.com/DavisRansom/E-Commerce-Marketplace' />


        <ProjectCard
          height='30rem'
          width='18rem'
          imgUrl={findYaPokemon}
          isDeployed={true}
          title='Find Ya Pokemon'
          description='A fun and simple website built with DOM manipulation. You can look up your favorite pokemon view an image from the official trading card game and find a sprite. You can also build a small team of 6 pokemon with four randomly generated moves'
          deployedLink='https://jmyoung93.github.io/Find-Ya-Pokemon//'
          gitHubRepo='https://github.com/JMYoung93/Find-Ya-Pokemon' />


        <ProjectCard
          height='30rem'
          width='18rem'
          imgUrl={blockChain}
          isDeployed={false}
          title='BlockChain Basics'
          description='A simple program to show the basics of blockchain. It uses p2p messaging and servers to connect to a blockchain wallet (not provided). Uses a miner to encrypt the blockchain and merkle nodes to link them together.'
          gitHubRepo='https://github.com/jpspann91/BlockchainBasics' />
          </div>

      </div>

      <div className='row container-fluid d-flex flex-row flex-wrap justify-content-around' style={{ justifyContent: 'center', paddingBottom: '10px' }}>

      <div className='container-fluid d-flex flex-row flex-wrap justify-content-around'>
        <ProjectCard
          height='30rem'
          width='18rem'
          imgUrl={codeQuiz}
          isDeployed={true}
          title='Code Quiz'
          description='A very simple coding quiz built with CSS, HTML and DOM manipulation. Can be built on to include more questions and more features if needed'
          deployedLink='https://jpspann91.github.io/CodeQuiz/'
          gitHubRepo='https://github.com/jpspann91/CodeQuiz' />


        <ProjectCard
          height='30rem'
          width='18rem'
          imgUrl={horiseon}
          isDeployed={true}
          title='Horiseon Code Refractor'
          description='Refactored a current website to meet accessibility requiremenet. HTML elemenets help make it easy for a screen reader to identify certain sections of the webstie properly for those who are unable to see.'
          deployedLink='https://jpspann91.github.io/CodeQuiz/'
          gitHubRepo='https://github.com/jpspann91/CodeQuiz' />


        <ProjectCard
          height='30rem'
          width='18rem'
          imgUrl={passwordGenerator}
          isDeployed={true}
          title='Password Generator'
          description='A simple application to help you build a strong password. Prompts user with a couple of different questions like length, lowercase letters, uppercase letters, numbers and special characters. Then it creates a password to be used. '
          deployedLink='https://jpspann91.github.io/PasswordGenerator/'
          gitHubRepo='https://github.com/jpspann91/PasswordGenerator' />
          </div>

      </div>
      <div className='row container-fluid d-flex flex-row flex-wrap justify-content-around' style={{ justifyContent: 'center', paddingBottom: '10px' }}>
      <div className='container-fluid d-flex flex-row flex-wrap justify-content-around'>
        <ProjectCard
          height='30rem'
          width='18rem'
          imgUrl={treasureGame}
          isDeployed={false}
          title='Treasure Game'
          description='An application built with Java. Finding a treasure rewards 1-3 points. Finding a troll means you loose all your gold. You have 25 tries to get a high score. Built as a final project for a beginners Java class. No live site currently'
          
          gitHubRepo='https://github.com/jpspann91/TreasureGame' />

        <ProjectCard
          height='30rem'
          width='18rem'
          imgUrl={weatherDashboard}
          isDeployed={true}
          title='Weather Dashboard'
          description='Application to look up the weather forecast in a city of your choice. Tyope into the search bar, hit enter, and you will be able to see the current weather for the city searched as well as a 5 day forecast. Also saves recently searched cities as well.'
          deployedLink='https://jpspann91.github.io/WeatherDashboard'
          gitHubRepo='https://github.com/jpspann91/WeatherDashboard' />

        <ProjectCard
          height='30rem'
          width='18rem'
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
