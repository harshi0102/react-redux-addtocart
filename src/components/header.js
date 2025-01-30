import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';  // Importing components from react-bootstrap
import { NavLink } from 'react-router-dom';  // Import NavLink from react-router-dom for routing
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome for icons
import { Badge } from '@mui/material';  // Import Badge from Material UI
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';  // Import the ShoppingCartIcon from Material UI

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="justify-content-between">  {/* Align navbar items to the left and right */}
      <Navbar.Brand href="/">Brand</Navbar.Brand>  {/* Your brand/logo here */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />  {/* Toggle button for mobile */}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">  {/* Aligning the navigation items to the left */}
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

      {/* Add to Cart Section with Badge on the Right */}
      <Nav className="ml-auto d-flex align-items-center">  {/* Align the "Add to Cart" on the right */}
        <NavItem className="d-flex align-items-center">
          <Badge badgeContent={4} color="primary">  {/* Adjust the number in badgeContent */}
            <ShoppingCartIcon style={{ fontSize: 25, cursor: "pointer" }} />
          </Badge>
          <span className="ml-2">Add to Cart</span> {/* Add text next to the icon */}
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default Header;
