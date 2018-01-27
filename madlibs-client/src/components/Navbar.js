import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

const NavBar = () =>
  <div>
    <Navbar>
      <Nav>
        <IndexLinkContainer to='/' >
          <NavItem>Home</NavItem>
        </IndexLinkContainer>
        <LinkContainer to='/madlibs'>
          <NavItem>Madlibs</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar>
  </div>

export default NavBar;
