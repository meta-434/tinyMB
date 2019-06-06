import React, { Component } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
class Body extends Component {
  render() {
    return (
      <Container>
        <Form>
          <Row>
            <Col md={{ span: "auto", offset: 5 }}>
              <p>this is the body content.</p>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}

export default Body;
