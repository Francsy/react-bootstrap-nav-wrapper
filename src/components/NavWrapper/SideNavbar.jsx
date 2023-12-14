import React from "react";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGauge, faNetworkWired, faFileContract, faArrowUpRightFromSquare, faFileArrowDown, faListCheck } from "@fortawesome/free-solid-svg-icons";

const SideNavbar = ({ isOpen }) => {
  return (
    <aside className={`${isOpen ? "show" : "hide"} `}>
    <Navbar bg="light" expand="lg" className="side-menu d-flex  align-items-start"  >
        <Nav className="p-3 flex-column">
          <Nav.Link href="#home"><FontAwesomeIcon icon={faGauge} className="menu-icon" /><span>&nbsp;Home</span></Nav.Link>
          <Nav.Link href="#link1"><FontAwesomeIcon icon={faNetworkWired} className="menu-icon"/><span>&nbsp;Vite</span></Nav.Link>
          <Nav.Link href="#link2"><FontAwesomeIcon icon={faFileContract} className="menu-icon"/><span>&nbsp;Example</span></Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action1"><FontAwesomeIcon icon={faListCheck} className="menu-icon"/><span>&nbsp;Action 1</span></NavDropdown.Item>
            <NavDropdown.Item href="#action2"><FontAwesomeIcon icon={faArrowUpRightFromSquare} className="menu-icon" /><span>&nbsp;Action 2</span></NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action3"><FontAwesomeIcon icon={faFileArrowDown} className="menu-icon"/><span>&nbsp;Other Action</span></NavDropdown.Item>
          </NavDropdown>
        </Nav>
    </Navbar>
    </aside>
  );
};

export default SideNavbar;
