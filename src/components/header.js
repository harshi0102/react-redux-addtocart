import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import { NavItem } from 'react-bootstrap';  // Correct import if you're using react-bootstrap

const Header = () => {  // Change header to Header (capitalized)
  return (
    <>
      <Nav pills>
        <NavItem>
          <NavLink active href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Another Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">Disabled Link</NavLink>
        </NavItem>
      </Nav>
    </>
  );
}

export default Header;  // Ensure the export is using the correct case
