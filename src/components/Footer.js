import React, { Component } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import {Nav, Navbar} from "react-bootstrap"
class Footer extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" expand="lg" fixed="bottom">
          <Nav className="mr-auto">
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                Library
              </Breadcrumb.Item>
              <Breadcrumb.Item active>Data</Breadcrumb.Item>
            </Breadcrumb>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Footer;
