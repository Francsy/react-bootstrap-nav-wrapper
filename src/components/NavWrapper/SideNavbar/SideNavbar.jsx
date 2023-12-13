import React from "react";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

import "./SideNavbar.css";

const SideNavbar = ({ isOpen }) => {
  return (
    <aside className={`${isOpen ? "show" : "hide"} `}>
    <Navbar bg="light" expand="lg" className="side-menu d-flex  align-items-start"  >
        <Nav className="p-3 flex-column">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#link1">Enlace 1</Nav.Link>
          <Nav.Link href="#link2">Enlace 2</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action1">Acción 1</NavDropdown.Item>
            <NavDropdown.Item href="#action2">Acción 2</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action3">Otra acción</NavDropdown.Item>
          </NavDropdown>
        </Nav>
    </Navbar>
    </aside>
  );
};

export default SideNavbar;
