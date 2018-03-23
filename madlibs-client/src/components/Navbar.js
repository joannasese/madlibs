import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

const NavBar = () =>
  <div>
    <Navbar>
      <Nav>
        <IndexLinkContainer to='/' >
          <NavItem>Home</NavItem>
        </IndexLinkContainer>

        <NavDropdown title="Madlibs" id="basic-nav-dropdown">
          <LinkContainer to='/madlibs'>
            <MenuItem>Create</MenuItem>
          </LinkContainer>
          <LinkContainer to='/saved-madlibs'>
            <MenuItem eventKey>Saved Madlibs</MenuItem>
          </LinkContainer>
        </NavDropdown>

        <LinkContainer to='/random-nonsense'>
          <NavItem>Random Nonsense</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar>
  </div>

export default NavBar;
