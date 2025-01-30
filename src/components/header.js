import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';  // Importing components from react-bootstrap
import { NavLink } from 'react-router-dom';  // Import NavLink from react-router-dom for routing

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">  {/* Navbar with light background and responsive expand on large screens */}
      <Navbar.Brand href="/">Brand</Navbar.Brand>  {/* Your brand/logo here */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />  {/* Toggle button for mobile */}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">  {/* Aligning the navigation items to the right */}
          <NavItem>
            <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about" className="nav-link" activeClassName="active">About Us</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/services" className="nav-link" activeClassName="active">Services</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/contact" className="nav-link" activeClassName="active">Contact Us</NavLink>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
