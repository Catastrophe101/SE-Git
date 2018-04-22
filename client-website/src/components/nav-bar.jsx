import React, { Component } from 'react';
import {Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class navbar extends Component {
  render() {
    return (
      <Navbar fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#home">HOME</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavDropdown eventKey={3} title="ABOUT" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}><a href="#about">About</a></MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.4}>Separated link</MenuItem>
      </NavDropdown>
      <NavDropdown eventKey={4} title="SERVICES" id="basic-nav-dropdown">
        <MenuItem eventKey={4.1}>Action</MenuItem>
        <MenuItem eventKey={4.2}>Another action</MenuItem>
        <MenuItem eventKey={4.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={4.4}>Separated link</MenuItem>
      </NavDropdown>
      <NavItem eventKey={2} href="#">
     OUTSOURCING
   </NavItem>
      <NavDropdown eventKey={5} title="CONSULTANCY" id="basic-nav-dropdown">
        <MenuItem eventKey={5.1}>Action</MenuItem>
        <MenuItem eventKey={5.2}>Another action</MenuItem>
        <MenuItem eventKey={5.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={5.4}>Separated link</MenuItem>
      </NavDropdown>
      <NavItem eventKey={2} href="#">
     EDC EXPERTISE
   </NavItem>
      <NavDropdown eventKey={6} title="CONTACT" id="basic-nav-dropdown">
        <MenuItem eventKey={6.1}>Action</MenuItem>
        <MenuItem eventKey={6.2}>Another action</MenuItem>
        <MenuItem eventKey={6.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={6.4}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar>
    );
  }
}
