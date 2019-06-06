import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

class Login extends Component {
  handleSubmit() {
    console.log("submit handler works");
    return <Alert variant={"primary"}>Submit Button Works!!</Alert>;
  }
  render() {
    return (
      <Container>
        <Form>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 6, offset: 6 }}>
              <Button
                variant="primary"
                type="submit"
                onClick={() => this.handleSubmit()}
              >
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}

export default Login;
