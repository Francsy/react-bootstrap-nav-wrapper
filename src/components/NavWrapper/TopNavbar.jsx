import React from "react";
import { Navbar, Container } from 'react-bootstrap';


const TopNavbar = ({ isMobile, toggleSidebar }) => {
  return (
    <header className="fixed-top">
      <Navbar expand="lg" className="bg-body-tertiary top-menu" >
        <Container fluid>
          {isMobile && <Navbar.Toggle onClick={toggleSidebar} />}
          <Navbar.Brand href="#home">
            <img
              src="/logo.svg"
              width="60"
              height="60"
              className="d-inline-block align-top"
              alt="Logo Francsy"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </header >
  );
};

export default TopNavbar;