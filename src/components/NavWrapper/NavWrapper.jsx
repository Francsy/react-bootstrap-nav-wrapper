import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import TopNavbar from "./TopNavbar";
import SideNavbar from "./SideNavbar";

import './NavWrapper.css';

const SidebarWrapper = (/* { children } */) => { // We will use Outlet (react-router-dom) instead of children
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [topMenuHeight, setTopMenuHeight] = useState(0);
  const [sideMenuWidth, setSideMenuWidth] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
      if (e.matches) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    handleMediaQueryChange(mediaQuery);
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    const topMenu = document.querySelector('.top-menu');
    const sideMenu = document.querySelector('.side-menu');

    if (topMenu && sideMenu) {
      const topMenuHeight = topMenu.clientHeight;
      const sideMenuWidth = sideMenu.clientWidth;

      setTopMenuHeight(topMenuHeight);
      setSideMenuWidth(sideMenuWidth);
    }
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };


  return (
    <div>
      <div className='position-fixed parent-menu'>
        <TopNavbar isMobile={isMobile} toggleSidebar={toggleSidebar} />
        <SideNavbar isOpen={sidebarOpen} />
      </div>
      <div className="p-4 content" style={{
        marginTop: `${topMenuHeight}px`,
        marginLeft: isMobile ? '0px' : `${sideMenuWidth}px`,
      }}>
        {/* Changed for Outlet (react-router-dom)
        {children}  
        */}
        <Outlet /> 
      </div>
    </div>
  );
};

export default SidebarWrapper;