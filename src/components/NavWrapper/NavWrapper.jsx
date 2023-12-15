import React, { useState, useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import TopNavbar from "./TopNavbar";
import SideNavbar from "./SideNavbar";

import './NavWrapper.css';

const SidebarWrapper = (/* { children } */) => { // We will use Outlet (react-router-dom) instead of children
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [topMenuHeight, setTopMenuHeight] = useState(0);
  const [sideMenuWidth, setSideMenuWidth] = useState(0);

  const topMenuRef = useRef(null);
  const sideMenuRef = useRef(null);


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
    if (topMenuRef.current && sideMenuRef.current) {
      const topMenuHeight = topMenuRef.current.clientHeight;
      const sideMenuWidth = sideMenuRef.current.clientWidth;

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
        <TopNavbar ref={topMenuRef} isMobile={isMobile} toggleSidebar={toggleSidebar} />
        <SideNavbar ref={sideMenuRef} isOpen={sidebarOpen} />
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