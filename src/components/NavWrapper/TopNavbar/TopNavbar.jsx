import React from "react";
import { Navbar, Button, Container } from 'react-bootstrap';

const TopNavbar = ({ isMobile, toggleSidebar }) => {
  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary fixed-top">
        <Container fluid>
          {isMobile && <Navbar.Toggle onClick={toggleSidebar} /> }
          
        {/*  (<Button className="boton" onClick={toggleSidebar}>
              <div className="burguer-line" style={{ width: '35px', height: '5px', backgroundColor: 'black', margin: '6px 0', }}></div>
              <div className="burguer-line" style={{ width: '35px', height: '5px', backgroundColor: 'black', margin: '6px 0', }}></div>
              <div className="burguer-line" style={{ width: '35px', height: '5px', backgroundColor: 'black', margin: '6px 0', }}></div>
            </Button>)  */}
          <Navbar.Brand href="#home">
            <img
              src="https://www.francsy.dev/assets/logo-4e70be36.svg"
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="Logo Francsy"
            />          </Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
};

export default TopNavbar;

