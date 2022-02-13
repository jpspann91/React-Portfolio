import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Resume from './pages/Resume/Resume';
import Footer from './Footer'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      
      {renderPage()}

      <Footer></Footer>
    </div>
  );
}


