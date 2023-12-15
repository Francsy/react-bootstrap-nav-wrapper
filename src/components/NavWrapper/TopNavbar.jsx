import React from "react";
import { Navbar, Container } from 'react-bootstrap';


const TopNavbar = React.forwardRef(({ isMobile, toggleSidebar }, ref) => {
  return (
    <header className="fixed-top">
      <Navbar bg="primary" expand="lg" className="bg-body-tertiary top-menu" ref={ref}>
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
});

export default TopNavbar;