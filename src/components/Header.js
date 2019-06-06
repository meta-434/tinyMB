import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Login from "./Login";
import { Navbar, NavDropdown } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">TinyMB</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Actions" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/1.1">
                  Browse subMBs
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/1.2">
                  Random Fresh subMB
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/1.3">
                  My subMBs
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/1.4">
                  Create subMB
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Sign Out</Nav.Link>
              <Nav.Link href="#memes">
                Profile
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
