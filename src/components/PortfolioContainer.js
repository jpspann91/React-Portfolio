import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home/Home.js';
import About from './pages/About/About.js';
import Projects from './pages/Projects/Projects.js';
import Resume from './pages/Resume/Resume.js';
import Footer from './Footer.js'
import Contact from './pages/Contact/Contact.js'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home/>;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Resume'){
      return <Resume />;
    }
    return <Contact/>
    
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div style={{justifyContent: 'center'}}>
      
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      
      {renderPage()}

      <Footer></Footer>
    </div>
  );
}


