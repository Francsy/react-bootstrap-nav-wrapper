import React, { useState, useEffect } from 'react';
import TopNavbar from "./TopNavbar";
import SideNavbar from "./SideNavbar";

const SidebarWrapper = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false); // Inicialmente cerrado en móviles

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
      if (e.matches) {
        setSidebarOpen(false); // Cierra el sidebar cuando cambia a vista móvil
      }
    };

    handleMediaQueryChange(mediaQuery);
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div style={{ display: 'flex' }}>
    <SideNavbar isOpen={sidebarOpen} />
    <div style={{ flex: 1 }}>
      <TopNavbar isMobile={isMobile} toggleSidebar={toggleSidebar} />
      <div style={{ padding: '20px' }}>{children}</div>
    </div>
  </div>


  );
};

export default SidebarWrapper;
